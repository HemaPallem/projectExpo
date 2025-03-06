import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { title: "AI-Powered Reviews", text: "Get in-depth AI-driven analysis for your content.", link: "/learn-more" },
    { title: "Expert Insights", text: "Connect with professionals for valuable feedback.", link: "/explore" },
    { title: "Get Started", text: "Enhance your work with AI-driven insights.", link: "/login" },
    { title: "Students & Creators", text: "Enhance your work with AI-driven insights.", link: "/see-more" }
  ];

  const middleIndex = Math.floor(cards.length / 2);
    const word = "ReviewXpertAI";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < word.length) {
        setDisplayedText((prev) => prev + word[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } 

      if (index === word.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, word]);


  return (
    <div className="landing-container">

      <div className="text-center">
        <h1 className="title">
            Welcome to <span className="gradient-text">{displayedText}</span>

        </h1>
        <p className="subtitle">Enhance your work with cutting-edge AI technology</p>
      </div>

      <div className="mockup-row">
        {cards.map((card, index) => {
          const isMiddle = index === middleIndex;
          const zIndex = hoveredIndex === index ? 10 : isMiddle ? cards.length : cards.length - Math.abs(middleIndex - index);

          return (
            <div
              key={index}
              className={`mockup-card ${hoveredIndex === index ? "hovered" : ""}`}
              style={{
                zIndex,
                transform: hoveredIndex === index
                  ? "scale(1.1) translateY(-20px)"
                  : isMiddle
                  ? "translateY(-5px)"
                  : `translateY(${Math.abs(middleIndex - index) * 5}px)`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(card.link)}

            >
              <div className="card-content">
                <div className="card-image-container">
                  <img src="src/assets/img1.jpeg" alt={card.title} className="card-img" />
                  <h5 className="card-title-overlay">{card.title}</h5>
                </div>
                <div className="card-text">
                  <p>{card.text}</p>
                </div>
              </div>

              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
