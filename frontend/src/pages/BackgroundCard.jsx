import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BackgroundCard.css"; // Import CSS file
//import backgroundImage from "./assets/hi.jpg"; // Import the background image

const BackgroundCard = () => {
  return (
    <div className="background-container">
      <div className="content-card">
        <h2 className="card-title">Students and Creators</h2>
        <p>
  ReviewXpert AI helps students find high-quality educational videos tailored to their searches, enhancing their learning experience. For 
  <strong> content creators</strong>, it provides insightful feedback to refine their strategy, boost engagement, and strengthen audience relationships. It bridges the gap between learners and creators, fostering an efficient and enriching digital ecosystem.
</p>

      </div>
    </div>
  );
};

export default BackgroundCard;
