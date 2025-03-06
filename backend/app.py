from flask import Flask, request, jsonify
from flask_cors import CORS
from youtube_service import get_videos, get_comments
from sentiment_analysis import analyze_sentiment

app = Flask(__name__)
CORS(app)

@app.route("/analyze_videos", methods=["POST"])
def analyze_videos():
    data = request.json
    topic = data.get("topic")

    if not topic:
        return jsonify({"error": "Topic is required"}), 400

    videos = get_videos(topic)
    for video in videos:
        comments = get_comments(video["videoId"])
        video["sentiment"] = analyze_sentiment(comments)  # Perform Sentiment Analysis

    return jsonify({"videos": videos})

if __name__ == "__main__":
    app.run(debug=True)
