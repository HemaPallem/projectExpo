// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { auth, provider, signInWithRedirect } from "../firebase"; // Import Firebase Auth

// // const SignUp = () => {
// //   const handleGoogleSignIn = () => {
// //     signInWithRedirect(auth, provider);
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2 className="auth-title">Sign Up</h2>
// //       <form className="signup-form">
// //         <input type="text" placeholder="Full Name" className="input-box" required />
// //         <input type="email" placeholder="Email" className="input-box" required />
// //         <input type="password" placeholder="Password" className="input-box" required />
// //         <button className="auth-button signup-button">Sign Up</button>
// //       </form>

// //       <div className="divider">or</div>

// //       {/* Google Sign-In Button */}
// //       <button className="google-button" onClick={handleGoogleSignIn}>
// //         <img src="/google.jpg" alt="Google" className="google-icon" />
// //         Continue with Google
// //       </button>

// //       <p className="auth-text">
// //         Already have an account? <Link to="/login" className="auth-link">Login</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default SignUp;





// // import React, { useState,useContext } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase Auth
// // import { UserContext } from "../UserContext"; // Import the UserContext

// // const SignUp = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const [error, setError] = useState(""); // State to store error messages
// //   const navigate = useNavigate(); // Hook for navigation
// //     const { setUser } = useContext(UserContext); // Access setUser from UserContext


// //   // Handle Input Changes
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setError(""); // Clear error message when user starts typing
// //   };

// //   // Handle Sign Up (Send Data to Backend)
// //   const handleSignUp = async (e) => {
// //     e.preventDefault();

// //     const { name, email, password } = formData;

// //     try {
// //       const response = await fetch("http://localhost:5000/signup", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ name, email, password }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         alert("Signup successful");
// //         setUser(data.user); // Update user data in context
// //         setFormData({ name: "", email: "", password: "" }); // Clear form fields
// //         navigate("/homepage"); // Redirect to /homepage
// //       } else {
// //         setError(data.error || "Signup failed"); // Set error message
// //       }
// //     } catch (error) {
// //       console.error("Signup error:", error);
// //       setError("An error occurred. Please try again."); // Set error message
// //     }
// //   };

// //   // Handle Google Sign-In
// //   const handleGoogleSignIn = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Extract user data
// //       const name = user.displayName || user.email.split("@")[0];
// //       const email = user.email;

// //       // Send data to your backend
// //       const response = await fetch("http://localhost:5000/google-signin", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ name, email }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         alert("Signup successful");
// //         setFormData({ name: "", email: "", password: "" }); // Clear form fields
// //         navigate("/homepage"); // Redirect to homepage
// //       } else {
// //         setError(data.error || "Signup failed");
// //       }
// //     } catch (error) {
// //       console.error("Google Sign-In error:", error);
// //       setError("An error occurred. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2 className="auth-title">Sign Up</h2>
// //       {error && <div className="error-message">{error}</div>} {/* Display error message */}
// //       <form className="signup-form" onSubmit={handleSignUp}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="User Name"
// //           className="input-box"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           className="input-box"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           className="input-box"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit" className="auth-button signup-button">
// //           Sign Up
// //         </button>
// //       </form>

// //       <div className="divider">or</div>

// //       {/* Google Sign-In Button */}
// //       <button className="google-button" onClick={handleGoogleSignIn}>
// //         <img src="/google.jpg" alt="Google" className="google-icon" />
// //         Continue with Google
// //       </button>

// //       <p className="auth-text">
// //         Already have an account? <Link to="/login" className="auth-link">Login</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default SignUp;

// // import React, { useState, useContext } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase Auth
// // import { UserContext } from "../UserContext"; // Import the UserContext

// // const SignUp = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const [error, setError] = useState(""); // State to store error messages
// //   const navigate = useNavigate(); // Hook for navigation
// //   const { setUser } = useContext(UserContext); // Access setUser from UserContext

// //   // Handle Input Changes
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setError(""); // Clear error message when user starts typing
// //   };

// //   // Handle Sign Up (Send Data to Backend)
// //   const handleSignUp = async (e) => {
// //     e.preventDefault();

// //     const { name, email, password } = formData;

// //     try {
// //       const response = await fetch("http://localhost:5000/signup", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ name, email, password }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         alert("Signup successful");
// //         setUser(data.user); // Update user data in context
// //         setFormData({ name: "", email: "", password: "" }); // Clear form fields
// //         navigate("/homepage"); // Redirect to /homepage
// //       } else {
// //         setError(data.error || "Signup failed"); // Set error message
// //       }
// //     } catch (error) {
// //       console.error("Signup error:", error);
// //       setError("An error occurred. Please try again."); // Set error message
// //     }
// //   };

// //   // Handle Google Sign-In
// //   const handleGoogleSignIn = async () => {
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;

// //       // Extract user data
// //       const name = user.displayName || user.email.split("@")[0];
// //       const email = user.email;

// //       // Send data to your backend
// //       const response = await fetch("http://localhost:5000/google-signin", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ name, email }),
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         alert("Signup successful");
// //         setUser(data.user); // Update user data in context
// //         setFormData({ name: "", email: "", password: "" }); // Clear form fields
// //         navigate("/homepage"); // Redirect to homepage
// //       } else {
// //         setError(data.error || "Signup failed");
// //       }
// //     } catch (error) {
// //       console.error("Google Sign-In error:", error);
// //       setError("An error occurred. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2 className="auth-title">Sign Up</h2>
// //       {error && <div className="error-message">{error}</div>} {/* Display error message */}
// //       <form className="signup-form" onSubmit={handleSignUp}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="User Name"
// //           className="input-box"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           className="input-box"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           className="input-box"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit" className="auth-button signup-button">
// //           Sign Up
// //         </button>
// //       </form>

// //       <div className="divider">or</div>

// //       {/* Google Sign-In Button */}
// //       <button className="google-button" onClick={handleGoogleSignIn}>
// //         <img src="/google.jpg" alt="Google" className="google-icon" />
// //         Continue with Google
// //       </button>

// //       <p className="auth-text">
// //         Already have an account? <Link to="/login" className="auth-link">Login</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default SignUp;

// import React, { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase Auth
// import { UserContext } from "../UserContext"; // Import the UserContext

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState(""); // State to store error messages
//   const navigate = useNavigate(); // Hook for navigation
//   const { setUser } = useContext(UserContext); // Access setUser from UserContext

//   // Handle Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError(""); // Clear error message when user starts typing
//   };

//   // Handle Sign Up (Send Data to Backend)
//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     const { name, email, password } = formData;

//     try {
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Signup successful");
//         setUser(data.user); // Update user data in context
//         setFormData({ name: "", email: "", password: "" }); // Clear form fields
//         navigate("/homepage"); // Redirect to /homepage
//       } else {
//         setError(data.error || "Signup failed"); // Set error message
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
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
//         alert("Signup successful");
//         setUser(data.user); // Update user data in context
//         setFormData({ name: "", email: "", password: "" }); // Clear form fields
//         navigate("/homepage"); // Redirect to homepage
//       } else {
//         setError(data.error || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Google Sign-In error:", error);
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2 className="auth-title">Sign Up</h2>
//       {error && <div className="error-message">{error}</div>} {/* Display error message */}
//       <form className="signup-form" onSubmit={handleSignUp}>
//         <input
//           type="text"
//           name="name"
//           placeholder="User Name"
//           className="input-box"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
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
//         <button type="submit" className="auth-button signup-button">
//           Sign Up
//         </button>
//       </form>

//       <div className="divider">or</div>

//       {/* Google Sign-In Button */}
//       <button className="google-button" onClick={handleGoogleSignIn}>
//         <img src="/google.jpg" alt="Google" className="google-icon" />
//         Continue with Google
//       </button>

//       <p className="auth-text">
//         Already have an account? <Link to="/login" className="auth-link">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default SignUp;






import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext"; // Import the UserContext
import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase Auth


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  // Handle Sign Up (Send Data to Backend)
  const handleSignUp = async (e) => {
  e.preventDefault();

  const { name, email, password } = formData;

  try {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log("Backend response:", data); // Log the backend response

    if (response.ok) {
      alert("Signup successful");
      setUser(data.user); // Update user data in context
      console.log("User state updated:", data.user); // Log the updated user state
      setFormData({ name: "", email: "", password: "" }); // Clear form fields
      navigate("/homepage"); // Redirect to /homepage
    } else {
      setError(data.error || "Signup failed"); // Set error message
    }
  } catch (error) {
    console.error("Signup error:", error);
    setError("An error occurred. Please try again."); // Set error message
  }
};

  // // Handle Sign Up (Send Data to Backend)
  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   const { name, email, password } = formData;

  //   try {
  //     const response = await fetch("http://localhost:5000/signup", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ name, email, password }),
  //     });

  //     const data = await response.json();
  //     console.log("Backend response:", data); // Log the backend response

  //     if (response.ok) {
  //       alert("Signup successful");
  //       setUser(data.user); // Update user data in context
  //       console.log("User state updated:", data.user); // Log the updated user state
  //       setFormData({ name: "", email: "", password: "" }); // Clear form fields
  //       navigate("/homepage"); // Redirect to /homepage
  //     } else {
  //       setError(data.error || "Signup failed"); // Set error message
  //     }
  //   } catch (error) {
  //     console.error("Signup error:", error);
  //     setError("An error occurred. Please try again."); // Set error message
  //   }
  // };

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
        alert("Signup successful");
        setUser(data.user); // Update UserContext
        localStorage.setItem("user", JSON.stringify(data.user)); // Store in localStorage
        navigate("/homepage");
      } else {
        setError(data.error || "Signup failed");
      }
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <form className="signup-form" onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          className="input-box"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <button type="submit" className="auth-button signup-button">
          Sign Up
        </button>
      </form>

      <div className="divider">or</div>

      {/* Google Sign-In Button */}
      <button className="google-button" onClick={handleGoogleSignIn}>
        <img src="/google.jpg" alt="Google" className="google-icon" />
        Continue with Google
      </button>

      <p className="auth-text">
        Already have an account? <Link to="/login" className="auth-link">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;