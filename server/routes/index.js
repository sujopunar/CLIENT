const { Router } = require("express");
const router = new Router();
const {signup} = require("../models/signup");
const bcrypt = require("bcrypt");

router.post("/signup", async (request, response) => {
  const { firstName,lastName, password, phone,email,street,profile } = request.body;
  
  const emailExists = await signup.findOne({ email });
  if (emailExists) {
    return response.status(404).json({message:"email already exists",status:true});
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new signup({ firstName,lastName, password: hashedPassword,phone,email,street,profile });
    password: hashedPassword,
    phone,
    email,
    street,
    profile,
  });
  try {
    const newUser = await user.save();
    response.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
    response.status(500).json(error.message);
  }
});

router.post("/login", async (request, response) => {
  const { email, password } = request.body;

  const user = await signup.findOne({ email });
  if (!user) {
    return response
      .status(404)
      .json({ message: "email not found", status: true });
  }

  console.log(request.body);
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return response
      .status(404)
      .json({ message: "password incorrect", status: true });
  }

  response.status(200).json(user);
});

module.exports = router;
