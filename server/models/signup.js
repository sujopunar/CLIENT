const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const signupSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  streetNumber: { type: Boolean, required: false },
  lastBillPaidDate: { type: Date, required: true },
  isAdmin: { type: Boolean, default: false },
  lastBillPaidImage: { type: String, require: false, default: 'noImage' }
}, { timestamps: true });

const login = mongoose.model("login", loginSchema);
const signup = mongoose.model("signup", signupSchema);

module.exports = { login, signup };
