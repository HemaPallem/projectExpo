from googleapiclient.discovery import build

YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY"

def get_videos(query):
    youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
    request = youtube.search().list(q=query, part="snippet", maxResults=5, type="video")
    response = request.execute()

    return [
        {"title": item["snippet"]["title"], "videoId": item["id"]["videoId"], "thumbnail": item["snippet"]["thumbnails"]["default"]["url"]}
        for item in response.get("items", [])
    ]

def get_comments(video_id):
    youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
    request = youtube.commentThreads().list(part="snippet", videoId=video_id, maxResults=20)
    response = request.execute()

    return [item["snippet"]["topLevelComment"]["snippet"]["textOriginal"] for item in response.get("items", [])]
