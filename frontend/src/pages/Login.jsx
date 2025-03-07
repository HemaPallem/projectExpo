// import React from "react";
// import { Link } from "react-router-dom";
// import { auth, provider, signInWithRedirect } from "../firebase";


// const Login = () => {
//   const handleGoogleSignIn = () => {
//     signInWithRedirect(auth, provider);
//   };

//   return (
//     <div className="auth-container">
//       <h2 className="auth-title">Login</h2>
//       <form className="login-form">
//         <input
//           type="email"
//           placeholder="Email"
//           className="input-box"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="input-box"
//           required
//         />
//         <button className="auth-button login-button">Login</button>
//       </form>

//       <div className="divider">or</div>

//       {/* Google Sign-In Button */}
//       <button className="google-button" onClick={handleGoogleSignIn}>
//         <img src="/google.jpg" alt="Google" className="google-icon" />
//         Continue with Google
//       </button>

//       <p className="auth-text">
//         Don't have an account?{" "}
//         <Link to="/signup" className="auth-link">
//           Sign Up
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Login;






// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase Auth
// import { UserContext } from "../UserContext"; // Import the UserContext

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState(""); // State to store error messages
//   const navigate = useNavigate(); // Hook for navigation
//     const { setUser } = useContext(UserContext); // Access setUser from UserContext


//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError(""); // Clear error message when user starts typing
//   };

//   // Handle Login (Send Data to Backend)
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Login successful");
//         navigate("/homepage"); // Redirect to /homepage
//       } else {
//         setError(data.error || "Login failed"); // Set error message
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("An error occurred. Please try again."); // Set error message
//     }
//   };

//   // Handle Google Sign-In
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Extract user data
//       const name = user.displayName || user.email.split("@")[0];
//       const email = user.email;

//       // Send data to your backend
//       const response = await fetch("http://localhost:5000/google-signin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Login successful");
//         setUser(data.user); // Update user data in context
//         navigate("/homepage"); // Redirect to homepage
//       } else {
//         setError(data.error || "Login failed");
//       }
//     } catch (error) {
//       console.error("Google Sign-In error:", error);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2 className="auth-title">Login</h2>
//       {error && <div className="error-message">{error}</div>} {/* Display error message */}
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="input-box"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="input-box"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="auth-button login-button">
//           Login
//         </button>
//       </form>

//       <div className="divider">or</div>

//       {/* Google Sign-In Button */}
//       <button className="google-button" onClick={handleGoogleSignIn}>
//         <img src="/google.jpg" alt="Google" className="google-icon" />
//         Continue with Google
//       </button>

//       <p className="auth-text">
//         Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase Auth
import { UserContext } from "../UserContext"; // Import the UserContext

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate(); // Hook for navigation
  const { setUser } = useContext(UserContext); // Access setUser from UserContext

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error message when user starts typing
  };

  // Handle Login (Send Data to Backend)
  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        setUser(data.user); // Update user data in context
        navigate("/homepage"); // Redirect to /homepage
      } else {
        setError(data.error || "Login failed"); // Set error message
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again."); // Set error message
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Extract user data
      const name = user.displayName || user.email.split("@")[0];
      const email = user.email;

      // Send data to your backend
      const response = await fetch("http://localhost:5000/google-signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        setUser(data.user); // Update user data in context
        navigate("/homepage"); // Redirect to homepage
      } else {
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-box"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-box"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="auth-button login-button">
          Login
        </button>
      </form>

      <div className="divider">or</div>

      {/* Google Sign-In Button */}
      <button className="google-button" onClick={handleGoogleSignIn}>
        <img src="/google.jpg" alt="Google" className="google-icon" />
        Continue with Google
      </button>

      <p className="auth-text">
        Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;