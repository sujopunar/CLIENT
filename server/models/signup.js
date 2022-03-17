const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const signupSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  streetNumber: { type: Boolean, required: true },
});

const login = mongoose.model("login", loginSchema);
const signup = mongoose.model("signup", signupSchema);
module.exports = { login, signup };
