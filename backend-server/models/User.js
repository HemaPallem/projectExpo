const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Ensure required fields are correct
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
