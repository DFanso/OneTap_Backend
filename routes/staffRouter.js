const express = require('express');
const { authStaff, registerStaff, getStaffProfile, getAllStaffs,getStaffProfileById} = require('../controllers/staffController');
const { staffProtect } = require('../middleware/staffAuthMiddleware');
const { extractId } = require('../middleware/extractMiddleware');

const router = express.Router();

router.route("/").post(registerStaff);
router.post("/login", authStaff);
router.get("/profile",staffProtect,getStaffProfile);
router.get("/all",getAllStaffs);
router.get("/by", extractId,getStaffProfileById);

module.exports = router;