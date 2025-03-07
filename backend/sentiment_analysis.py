
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

def analyze_sentiment(comments):
    if not comments:
        return {"positive": 0, "neutral": 0, "negative": 0}

    analyzer = SentimentIntensityAnalyzer()
    sentiment_scores = {"positive": 0, "neutral": 0, "negative": 0}

    for comment in comments:
        score = analyzer.polarity_scores(comment)["compound"]
        if score > 0.05:
            sentiment_scores["positive"] += 1
        elif score < -0.05:
            sentiment_scores["negative"] += 1
        else:
            sentiment_scores["neutral"] += 1

    total = sum(sentiment_scores.values())

    # Prevent division by zero
    if total == 0:
        return {"positive": 0, "neutral": 0, "negative": 0}

    return {k: round(v / total * 100, 2) for k, v in sentiment_scores.items()}
