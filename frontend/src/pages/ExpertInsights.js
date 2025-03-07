
import React from "react";
import "./ExpertInsights.css"; // Import styles
import laptopImage from "../assets/hlo.jpg"; // Import the image

const ExpertInsights = () => {
  return (
    <div className="page-container">
      <div className="image-container">
        {/* Left Backside Image */}
        <img src={laptopImage} alt="Laptop" className="image left-back" />

        {/* Right Backside Image */}
        <img src={laptopImage} alt="Laptop" className="image right-back" />

        {/* Main Image */}
        <img src={laptopImage} alt="Laptop" className="image main" />

        {/* Info Card (Now appears over the main image) */}
        <div className="info-card">
          <h1 className="title">Expert Insights</h1>
          <p className="description">
          ReviewXpert AI is an advanced AI-powered platform that provides expert insights by analyzing YouTube comments using Natural Language Processing (NLP). It extracts meaningful data to offer suggestions, reviews, better video recommendations, and feedback to enhance both content creation and user engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertInsights;
