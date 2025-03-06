from textblob import TextBlob

def analyze_sentiment(comments):
    if not comments:
        return {"positive": 0, "neutral": 0, "negative": 0}

    sentiment_scores = {"positive": 0, "neutral": 0, "negative": 0}

    for comment in comments:
        polarity = TextBlob(comment).sentiment.polarity
        if polarity > 0:
            sentiment_scores["positive"] += 1
        elif polarity < 0:
            sentiment_scores["negative"] += 1
        else:
            sentiment_scores["neutral"] += 1

    total = sum(sentiment_scores.values())
    return {k: round(v / total * 100, 2) for k, v in sentiment_scores.items()}
