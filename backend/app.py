from flask import Flask, request, jsonify
from flask_cors import CORS
from youtube_service import get_videos, get_comments
from sentiment_analysis import analyze_sentiment, extract_keywords
import concurrent.futures

app = Flask(__name__)
CORS(app)

@app.route("/analyze_videos", methods=["POST"])
def analyze_videos():
    data = request.json
    topic = data.get("topic")

    if not topic:
        return jsonify({"error": "Topic is required"}), 400

    videos = get_videos(topic)

    # Use ThreadPoolExecutor to fetch comments in parallel
    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = {executor.submit(get_comments, video["videoId"]): video for video in videos}
        for future in concurrent.futures.as_completed(futures):
            video = futures[future]
            try:
                comments = future.result()
                video["sentiment"] = analyze_sentiment(comments)
                video["wordCloud"] = extract_keywords(comments)  # ✅ Ensure word cloud data is included
            except Exception as e:
                video["sentiment"] = {"positive": 0, "neutral": 0, "negative": 0}
                video["wordCloud"] = []  # ✅ Ensure wordCloud is always present

    return jsonify({"videos": videos})


@app.route("/analyze_comments", methods=["POST"])
def analyze_comments():
    """Fetches comments of a YouTube video and analyzes sentiment + word cloud."""
    data = request.json
    video_url = data.get("video_url")

    if not video_url:
        return jsonify({"error": "Video URL is required"}), 400

    video_id = video_url.split("v=")[-1].split("&")[0]
    comments = get_comments(video_id)

    if not comments:
        return jsonify({"error": "No comments found for this video."}), 404

    sentiment = analyze_sentiment(comments)
    word_cloud_data = extract_keywords(comments)

    print("Sentiment Analysis:", sentiment)  # ✅ Debug print
    print("Word Cloud Data:", word_cloud_data)  # ✅ Debug print

    return jsonify({
        "videoId": video_id,
        "total_comments": len(comments),
        "sentiment": sentiment,
        "wordCloud": word_cloud_data
    })


if __name__ == "__main__":
    app.run(debug=True)
