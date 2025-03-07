import React, { useState } from "react";
import SentimentBarChart from "../components/SentimentBarChart";
import WordCloud from "../components/WordCloud";

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
    setVideos([]);
  
    try {
      console.log("Sending request to backend...");
      const response = await fetch("http://127.0.0.1:5000/analyze_videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      console.log("Received response:", response);
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Parsed response data:", JSON.stringify(data, null, 2)); // ✅ Debugging API response

      if (data.error) {
        setError(data.error);
      } else if (data.videos && data.videos.length > 0) {
        setVideos(data.videos);

         // Store searched topic in DB
         const user = JSON.parse(localStorage.getItem("user")); // Get user info
         if (user) {
             await fetch("http://localhost:5000/store-topic", {
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify({ email: user.email, topic }),
             });
         }
      } else {
        setError("No videos found for this topic.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(`Failed to fetch videos: ${err.message}`);
    }
  
    setLoading(false);
  };
  console.log("User data from localStorage:", localStorage.getItem("user"));
  console.log("Storing topic in history:", topic);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="fw-bold">Discover the Best Learning Opportunities</h1>
      <p className="text-muted mx-auto w-75">
        Find high-quality educational content tailored to your interests. Enter a topic to explore top-rated videos and insightful reviews.
      </p>

      <input
        type="text"
        placeholder="Search for topics..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="px-4 py-2 border border-black-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition-all duration-300 ease-in-out w-80 text-gray-700 placeholder-gray-400"
      />

      <button
        onClick={fetchVideos}
        className={`px-6 py-2 border-black-300 rounded-lg text-black ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
        disabled={loading}
      >
        {loading ? "Searching..." : "Submit"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 w-full max-w-lg">
        {videos.length > 0 && <h2 className="text-xl font-bold mb-4">Results:</h2>}
        {videos.map((video, index) => (
          <div key={video.videoId || index} className="flex flex-col items-center mb-4 border p-4 rounded-md bg-white shadow-lg">
            <img src={video.thumbnail} alt={video.title} className="w-32 h-32 rounded-md mb-2" />
            <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
              {video.title}
            </a>
            <div className="w-full mt-4">
              <SentimentBarChart sentimentData={video.sentiment} />
            </div>
            {video.wordCloud?.length ? <WordCloud data={video.wordCloud} /> : <p className="text-gray-500">No word cloud data available.</p>}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default StudentMode;
