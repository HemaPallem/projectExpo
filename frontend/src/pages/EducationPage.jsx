import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EducationPage.css";
import Education from "../assets/BackgroundEducation.jpg"; // Front Image
import BackgroundEducation from "../assets/Education.avif"; // Back Image
import ExtraBackground from "../assets/ExtraBackground.jpg";//last image
const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-content">
        <h1 className="education-title">AI Powered Reviews</h1>
        <p>
        ReviewXpert AI is an advanced AI-powered tool designed to assist both content creators and students by providing intelligent insights, personalized recommendations, and content optimization strategies. It analyzes YouTube videos, considers viewer comments, and evaluates audience engagement to provide meaningful reviews and feedback. By leveraging this data, ReviewXpert AI enhances content quality, learning experiences, and helps creators improve their videos based on real audience interactions.</p>
      </div>
      <div className="education-images">
        <img 
        src={ExtraBackground }
        alt="ExtraBackground"
        className="education-image last"
        />
        <img
          src={BackgroundEducation}
          alt="Background Education"
          className="education-image back"
        />
        <img
          src={Education}
          alt="Education"
          className="education-image front"
        />
      </div>
    </div>
  );
};

export default EducationPage;
