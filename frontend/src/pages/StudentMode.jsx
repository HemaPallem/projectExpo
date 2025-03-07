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
    setVideos([]); // Clear previous results
  
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
      console.log("Parsed response data:", data);
  
      if (data.error) {
        setError(data.error);
      } else if (data.videos && data.videos.length > 0) {
        setVideos(data.videos);
      } else {
        setError("No videos found for this topic.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(`Failed to fetch videos: ${err.message}`);
    }
  
    setLoading(false);
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
     <h1 className="fw-bold">
        Discover the Best Learning Opportunities
      </h1>
      <p className="text-muted mx-auto w-75">
        Find high-quality educational content tailored to your interests.  
        Enter a topic to explore top-rated videos and insightful reviews.
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
          <div key={video.videoId || index} className="flex flex-col items-center mb-4 border p-2 rounded-md">
            <img src={video.thumbnail} alt={video.title} className="w-32 h-32 rounded-md mb-2" />
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg"
            >
              {video.title}
            </a>
            <div className="mt-2">
              <p className="text-sm text-green-600">Positive: {video.sentiment.positive}%</p>
              <p className="text-sm text-gray-600">Neutral: {video.sentiment.neutral}%</p>
              <p className="text-sm text-red-600">Negative: {video.sentiment.negative}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentMode;
