
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"; // Profile icon
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // Detect mobile view

  // Close dropdown when resizing to a larger screen & detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 fixed-top">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        {/* Brand Name Always on the Left */}
        <a className="navbar-brand fw-bold ms-3" href="#" onClick={() => handleNavigation("/")}>
          reviewXpertAI
        </a>

        {/* Toggle Button - Visible in Mobile View */}
        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Items */}
        {!isMobile ? (
          // Desktop View - Show Items Inline
          <div className="navbar-nav ms-auto d-flex flex-row align-items-center gap-3">
            <a className="nav-link" href="#" onClick={() => handleNavigation("/homepage")}>
              Home 
            </a>
            <a className="nav-link" href="#" onClick={() => handleNavigation("/about")}>
              About 
            </a>
            <a className="nav-link" href="#" onClick={() => handleNavigation("/testimonials")}>
              Testimonials
            </a>
            <a className="nav-link" href="#" onClick={() => handleNavigation("/team")}>
              Team
            </a>
            <button className="btn btn-outline-danger me-2" onClick={handleLogout}>
              Logout
            </button>
            {/* Profile Icon (instead of text in desktop view) */}
            <button className="btn profile-btn" onClick={() => handleNavigation("/profile")}>
              <CgProfile className="profile-icon" />
            </button>
          </div>
        ) : (
          // Mobile View - Dropdown
          <div className={`dropdown-menu dropdown-menu-end ${isOpen ? "show" : ""}`}>
            <a className="dropdown-item" href="#" onClick={() => handleNavigation("/about")}>
              About Us
            </a>
            <a className="dropdown-item" href="#" onClick={() => handleNavigation("/testimonials")}>
              Testimonials
            </a>
            <a className="dropdown-item" href="#" onClick={() => handleNavigation("/team")}>
              Team
            </a>
            <a className="dropdown-item fw-bold" href="#" onClick={() => handleNavigation("/profile")}>
              Profile
            </a>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item text-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
