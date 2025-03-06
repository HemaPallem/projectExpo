import React, { useState } from "react";

function Footer() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim() !== "") {
      alert("Thank you for your feedback!");
      setFeedback(""); // Clear input after submission
    }
  };

  return (
    <footer className="p-4 bg-black text-white w-100" style={{ margin: 0, padding: 0 }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center px-4">
          {/* Copyright Section */}
          <p className="mb-0">© 2024 revieXpertAI. All rights reserved.</p>

          {/* Feedback Section */}
          <div className="input-group" style={{ maxWidth: "50%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;