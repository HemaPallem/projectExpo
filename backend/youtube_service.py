from googleapiclient.discovery import build

YOUTUBE_API_KEY = "AIzaSyAgExXKUGbHpbOpT_fTL4gP_1U5LEUpYYw"  # Replace with your valid API key

def get_videos(query):
    print(f"Fetching videos for query: {query}")
    youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

    # Step 1: Fetch 50 videos (to ensure enough results)
    search_request = youtube.search().list(
        q=query,
        part="snippet",
        maxResults=50,  # Fetch more videos to ensure we get 20 valid ones
        type="video"
    )
    search_response = search_request.execute()
    
    # Extract video IDs
    video_ids = [item["id"]["videoId"] for item in search_response.get("items", [])]
    
    if not video_ids:
        print("No videos found.")
        return []
    
    # Step 2: Fetch video details (including view count and duration)
    video_details_request = youtube.videos().list(
        part="statistics,contentDetails,snippet",
        id=",".join(video_ids)  # Pass video IDs to get stats
    )
    video_details_response = video_details_request.execute()
    
    videos = []
    
    for item in video_details_response.get("items", []):
        video_id = item["id"]
        title = item["snippet"]["title"]
        thumbnail = item["snippet"]["thumbnails"]["default"]["url"]
        views = int(item["statistics"].get("viewCount", 0))
        duration = item["contentDetails"]["duration"]  # Example: PT15M33S (15 min 33 sec)
        
        # Convert duration from ISO 8601 format to seconds
        total_seconds = parse_duration(duration)
        
        # Exclude Shorts (typically less than 60 seconds)
        if total_seconds >= 60:
            videos.append({
                "title": title,
                "videoId": video_id,
                "thumbnail": thumbnail,
                "views": views,
                "duration": total_seconds  # Useful for sorting
            })

    # Step 3: Sort by views (descending order) and return top 20
    videos_sorted = sorted(videos, key=lambda x: x["views"], reverse=True)

    return videos_sorted[:20]


def parse_duration(duration):
    """Convert YouTube's ISO 8601 duration (PT#H#M#S) to total seconds."""
    import re

    hours = re.search(r"(\d+)H", duration)
    minutes = re.search(r"(\d+)M", duration)
    seconds = re.search(r"(\d+)S", duration)

    total_seconds = (
        (int(hours.group(1)) * 3600 if hours else 0) +
        (int(minutes.group(1)) * 60 if minutes else 0) +
        (int(seconds.group(1)) if seconds else 0)
    )
    return total_seconds

def get_comments(video_id):
    print(f"Fetching all comments for video: {video_id}")
    youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)
    
    comments = []
    next_page_token = None  # For pagination
    
    try:
        while True:
            request = youtube.commentThreads().list(
                part="snippet",
                videoId=video_id,
                maxResults=100,  # Max per request
                textFormat="plainText",
                pageToken=next_page_token  # Handle pagination
            )
            response = request.execute()
            
            # Extract top-level comments (excluding replies)
            comments += [item["snippet"]["topLevelComment"]["snippet"]["textOriginal"]
                         for item in response.get("items", [])]
            
            print(f"Fetched {len(comments)} comments so far...")

            # Check if there's another page
            next_page_token = response.get("nextPageToken")
            if not next_page_token:
                break  # Stop if no more pages

    except Exception as e:
        print(f"Error fetching comments: {e}")

    print(f"Total comments fetched: {len(comments)}")
    return comments


