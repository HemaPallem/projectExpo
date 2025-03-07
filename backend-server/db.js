const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/ReviewXPertAI"; // Ensure the correct DB name

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
