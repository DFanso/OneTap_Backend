const express = require('express');
const { authUser, registerUser, getUserProfile} = require('../controllers/userController');


const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/profile", getUserProfile);
module.exports = router;