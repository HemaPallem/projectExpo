const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const validator = require("validator");

const app = express();
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());

// Password strength validation
const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate password strength
    if (!validatePassword(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ name });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save the new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully",
                            user: { name: newUser.name, email: newUser.email } 
                          });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist. Please create an account." });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // If everything is valid, send a success response
    res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// Google Sign-In route
app.post("/google-signin", async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: "Login successful", user: existingUser });
    }

    // If the user does not exist, create a new user
    const newUser = new User({ name, email, password: "google-auth" }); // Use a placeholder password
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Google Sign-In error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});


app.post("/store-topic", async (req, res) => {
  try {
    const { email, topic } = req.body;
    console.log("Storing topic for:", email, "Topic:", topic); // Debug log

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!user.searchHistory.includes(topic)) {
      user.searchHistory.push(topic);
      await user.save();
    }

    res.status(200).json({ message: "Topic stored successfully", searchHistory: user.searchHistory });
  } catch (error) {
    console.error("Error storing topic:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/get-search-history", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Fetching search history for:", email); // Debug log

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    console.log("Search History:", user.searchHistory); // Debug log
    res.status(200).json({ searchHistory: user.searchHistory });
  } catch (error) {
    console.error("Error fetching search history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/store-creator-url", async (req, res) => {
  try {
      const { email, video_url } = req.body;
      console.log("Storing video URL for:", email, "URL:", video_url);

      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: "User not found" });

      if (!user.creatorHistory.includes(video_url)) {
          user.creatorHistory.push(video_url);
          await user.save();
      }

      res.status(200).json({ message: "Video URL stored successfully", creatorHistory: user.creatorHistory });
  } catch (error) {
      console.error("Error storing video URL:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/get-creator-history", async (req, res) => {
  try {
      const { email } = req.body;
      console.log("Fetching creator history for:", email);

      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: "User not found" });

      console.log("Creator History:", user.creatorHistory);
      res.status(200).json({ creatorHistory: user.creatorHistory });
  } catch (error) {
      console.error("Error fetching creator history:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
