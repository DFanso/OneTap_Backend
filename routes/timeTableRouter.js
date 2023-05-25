const express = require('express');
const {insertUser, getLectureData, getStaffLectureData, getAllLectures} = require('../controllers/timeTableController');
const {protect} = require('../middleware/authMiddleware');
const {staffProtect} = require('../middleware/staffAuthMiddleware');


const router = express.Router();

router.route("/").post(insertUser);
router.get("/user-lectures",protect,getLectureData);
router.get("/staff-lectures",staffProtect,getStaffLectureData);
router.get("/all",getAllLectures);


module.exports = router;
