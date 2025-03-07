
import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"; // Profile icon
import "./Navbar.css";
import { UserContext } from "../UserContext"; // Import the UserContext

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // Detect mobile view

  const { user, setUser } = useContext(UserContext); // Access user data from UserContext

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
    setUser(null); // Clear user context
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/");
    setIsOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen); // Toggle profile dropdown
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
            {/* Profile Dropdown */}
            <div className="dropdown">
              <button className="btn profile-btn" onClick={toggleProfileDropdown}>
                <CgProfile className="profile-icon" />
              </button>
              {/* Profile Dropdown Menu */}
              <div
                className={`dropdown-menu dropdown-menu-end ${isProfileOpen ? "show" : ""}`}
                style={{ right: 0, left: "auto" }}
              >
                {user ? (
                  <>
                    <div className="dropdown-item">
                      <strong>Username:</strong> {user.name}
                    </div>
                    <div className="dropdown-item">
                      <strong>Email:</strong> {user.email}
                    </div>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={() => handleNavigation("/profile")}>
                      Profile
                    </button>
                  </>
                ) : (
                  <div className="dropdown-item">Not logged in</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Mobile View - Dropdown
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <div className="navbar-nav">
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
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
              {/* Profile Dropdown in Mobile View */}
              <div className="dropdown">
                <button className="nav-link btn btn-link" onClick={toggleProfileDropdown}>
                  Profile
                </button>
                {/* Profile Dropdown Menu */}
                <div
                  className={`dropdown-menu ${isProfileOpen ? "show" : ""}`}
                  style={{ right: 0, left: "auto" }}
                >
                  {user ? (
                    <>
                      <div className="dropdown-item">
                        <strong>Username:</strong> {user.name}
                      </div>
                      <div className="dropdown-item">
                        <strong>Email:</strong> {user.email}
                      </div>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={() => handleNavigation("/profile")}>
                        Profile
                      </button>
                    </>
                  ) : (
                    <div className="dropdown-item">Not logged in</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
