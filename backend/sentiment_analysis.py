from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from collections import Counter
import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# Download resources if not available
nltk.download("stopwords", quiet=True)
nltk.download("punkt", quiet=True)


def analyze_sentiment(comments):
    """Analyzes sentiment of YouTube comments using Vader."""
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
    return {k: round((v / total) * 100, 2) if total else 0 for k, v in sentiment_scores.items()}



def extract_keywords(comments):
    """Extracts top words from comments, excluding stopwords."""
    stop_words = set(stopwords.words("english"))
    words = []

    for comment in comments:
        tokens = word_tokenize(comment.lower())  # Tokenize and lowercase
        words.extend([word for word in tokens if word.isalpha() and word not in stop_words])

    return [{"text": word, "value": count} for word, count in Counter(words).most_common(50)]
