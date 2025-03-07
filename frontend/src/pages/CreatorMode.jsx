import React, { useState } from "react";

const CreatorMode = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [commentAnalysis, setCommentAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeComments = async () => {
    if (!videoUrl.trim()) {
      setError("Please enter a valid YouTube video URL.");
      return;
    }

    setLoading(true);
    setError("");
    setCommentAnalysis(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze_comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ video_url: videoUrl }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setCommentAnalysis(data);
      }
    } catch (err) {
      setError(`Failed to analyze comments: ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="fw-bold">Analyze YouTube Video Comments</h1>
      <p className="text-muted mx-auto w-75">
        Enter a YouTube video URL to get sentiment analysis on its comments.
      </p>

      <input
        type="text"
        placeholder="Enter YouTube video URL..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 w-80 my-4"
      />
      <button
        onClick={analyzeComments}
        className={`px-6 py-2 rounded-lg ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Comments"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {commentAnalysis && (
        <div className="mt-6 w-full max-w-lg border p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Comment Sentiment Analysis</h2>
          <p className="text-sm">Total Comments Analyzed: {commentAnalysis.total_comments}</p>
          <div className="mt-2">
            <p className="text-sm text-green-600">Positive: {commentAnalysis.sentiment.positive}%</p>
            <p className="text-sm text-gray-600">Neutral: {commentAnalysis.sentiment.neutral}%</p>
            <p className="text-sm text-red-600">Negative: {commentAnalysis.sentiment.negative}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatorMode;
