const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const SignupSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  streetNumber: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", Schema);
