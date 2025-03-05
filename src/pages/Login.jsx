import React from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithRedirect } from "../firebase";


const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="input-box"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-box"
          required
        />
        <button className="login-button">Login</button>
      </form>

      <div className="divider">or</div>

      {/* Google Sign-In Button */}
      <button className="google-button" onClick={handleGoogleSignIn}>
        <img src="/google.jpg" alt="Google" className="google-icon" />
        Continue with Google
      </button>

      <p className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
