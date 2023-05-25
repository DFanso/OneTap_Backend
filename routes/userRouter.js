const express = require('express');
const { authUser, registerUser, getUserProfile,getAllUsers,getUserProfileById} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { extractId } = require('../middleware/extractMiddleware');

const User = require('../models/userModel');

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/profile",protect,getUserProfile);
router.get("/all",getAllUsers);
router.get("/by", extractId,getUserProfileById);
  


module.exports = router;