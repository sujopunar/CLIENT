const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
<<<<<<< HEAD
  profile:{type:String,require:false},
=======
>>>>>>> c9dd9e6c25999a9a4ee8542aa2d0ef465b0133ec
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  street: { type: String, required: true },
  streetNumber: { type: Boolean, required: false },
  lastBillPaidDate: { type: Date, required: false, default: new Date().toISOString() },
  isAdmin: { type: Boolean, default: false },
  lastBillPaidImage: { type: String, require: false, default: 'noImage' }
}, { timestamps: true });

const signup = mongoose.model("signup", signupSchema);

module.exports = { signup };
