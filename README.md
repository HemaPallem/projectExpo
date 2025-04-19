# ReviewXpertAI

**ReviewXpertAI** is an AI-powered web application that enhances the YouTube learning experience. It uses sentiment analysis on YouTube video comments to help students discover high-quality educational content and assists content creators in improving their videos based on audience feedback.

---

## ✨ Features

- **Student Mode:**
  - Search educational topics.
  - Analyze and display sentiment scores of related videos.
  - Choose the best videos based on community feedback.

- **Creator Mode:**
  - Enter your YouTube video URL.
  - Receive a detailed sentiment analysis of viewer comments.
  - Improve content strategy with audience insights.

- **History Storage:**
  - Students can view previously searched topics.
  - Creators can view previously analyzed videos.

---

## 🚀 How It Works

1. **Student Mode:**
   - User enters a topic.
   - Backend fetches related YouTube videos.
   - Comments from videos are analyzed using sentiment analysis.
   - Videos are ranked and displayed based on sentiment scores.

2. **Creator Mode:**
   - User submits a YouTube video URL.
   - Comments are fetched and analyzed.
   - Sentiment report is displayed for the creator.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Flask (Python)
- **Database:** MongoDB
- **APIs:** YouTube Data API
- **Libraries & Tools:** NLTK, SpaCy, Scikit-learn, Axios, Postman

---

## 🧠 AI & Machine Learning

- Sentiment Analysis on YouTube comments.
- Natural Language Processing techniques: tokenization, stopword removal, lemmatization.
- Real-time scoring and ranking of videos based on sentiment polarity.

---

## 📂 Project Structure

ReviewXpertAI/ ├── backend/ │ ├── app.py │ ├── models/ │ ├── routes/ │ └── utils/ ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── services/ │ │ └── App.js ├── README.md └──

---

## Future Enhancements
- Personalized video recommendations.
- Advanced analytics dashboard for creators.
- Support for multilingual sentiment analysis.
- Cloud deployment for scalability.

---

