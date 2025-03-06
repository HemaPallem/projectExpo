import React, { useState } from "react";

const StudentMode = () => {
  const [topic, setTopic] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVideos = async () => { 
    if (!topic.trim()) {
      setError("Please enter a topic.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/analyze_videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setVideos(data.videos);
      }
    } catch (err) {
      setError("Failed to fetch videos. Please try again.",err);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Search for Opportunities</h1>
      <p className="text-lg mb-6">Enter a keyword to find relevant results.</p>
      
      <input
        type="text"
        placeholder="Search..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="px-4 py-2 border rounded-md mb-4 w-80"
      />

      <button
        onClick={fetchVideos}
        className="px-6 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600"
      >
        {loading ? "Searching..." : "Submit"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 w-full max-w-lg">
        {videos.length > 0 && <h2 className="text-xl font-bold mb-4">Results:</h2>}
        {videos.map((video) => (
          <div key={video.videoId} className="flex flex-col items-center mb-4 border p-2 rounded-md">
            <img src={video.thumbnail} alt={video.title} className="w-20 h-20 rounded-md mb-2" />
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {video.title}
            </a>
            <div className="mt-2">
              <p className="text-sm">Positive: {video.sentiment.positive}%</p>
              <p className="text-sm">Neutral: {video.sentiment.neutral}%</p>
              <p className="text-sm">Negative: {video.sentiment.negative}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentMode;
