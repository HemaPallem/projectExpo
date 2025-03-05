import React from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithRedirect } from "../firebase"; // Import Firebase Auth

const SignUp = () => {
  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form">
        <input type="text" placeholder="Full Name" className="input-box" required />
        <input type="email" placeholder="Email" className="input-box" required />
        <input type="password" placeholder="Password" className="input-box" required />
        <button className="signup-button">Sign Up</button>
      </form>

      <div className="divider">or</div>

      {/* Google Sign-In Button */}
      <button className="google-button" onClick={handleGoogleSignIn}>
        <img src="/google.jpg" alt="Google" className="google-icon" />
        Continue with Google
      </button>

      <p className="login-text">
        Already have an account? <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
