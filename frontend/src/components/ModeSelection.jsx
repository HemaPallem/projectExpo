import React from "react";
import { useNavigate } from "react-router-dom";
import "./ModeSelection.css";

function ModeSelection() {
  const navigate = useNavigate();

  // Navigate to the respective page on click
  const handleModeSelection = (mode) => {
    if (mode === "student") {
      navigate("/StudentMode"); // Navigate to Student Mode Page
    } else if (mode === "creator") {
      navigate("/creator-mode"); // Navigate to Creator Mode Page
    }
  };

  return (
    <div className="mode-container">
      {/* Student Mode Card */}
      <div className="flip-card" onClick={() => handleModeSelection("student")}>
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front student-mode shadow-2">
          </div>
          {/* Back Side */}
          <div className="flip-card-back shadow-2">
            <p>Get AI-powered learning assistance, personalized study plans, and expert insights.</p>
          </div>
        </div>
      </div>

      {/* Creator Mode Card */}
      <div className="flip-card" onClick={() => handleModeSelection("creator")}>
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front creator-mode">
          </div>
          {/* Back Side */}
          <div className="flip-card-back">
            <p>Enhance your content with AI-driven insights, expert feedback, and creativity tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeSelection;
