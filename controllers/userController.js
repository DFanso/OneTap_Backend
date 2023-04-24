const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const generateToken = require("../generateToken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    studentId,
    username,
    password,
    email,
    phone,
    address,
    dob,
    degree,
    batch,
    faculty,
  } = req.body;

  if (
    !studentId ||
    !username ||
    !password ||
    !email ||
    !phone ||
    !address ||
    !dob ||
    !degree ||
    !batch ||
    !faculty
  ) {
    return res.status(400).json({
      message: "Please enter all the fields",
    });
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // Remove this line, as you don't need to hash the password manually.
  // const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    studentId,
    username,
    password, // Use the plain-text password here, as the pre-save middleware will handle the hashing.
    email,
    phone,
    address,
    dob,
    degree,
    batch,
    faculty,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      studentId: user.studentId,
      username: user.username,
      email: user.email,
      phone: user.phone,
      address: user.address,
      dob: user.dob,
      degree: user.degree,
      batch: user.batch,
      token: generateToken(user._id),
    });
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      address: user.address,
      dob: user.dob,
      degree: user.degree,
      batch: user.batch,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      address: user.address,
      dob: user.dob,
      degree: user.degree,
      batch: user.batch,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
module.exports = { registerUser, authUser, getUserProfile };
