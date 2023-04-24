const express = require("express");
const attendanceController = require("../controllers/attendanceController");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/add", protect, attendanceController.addAttendance);
router.get("/all", attendanceController.getAllAttendance);
router.get(
  "/student/:studentID",
  attendanceController.getAttendanceByStudentID
);
router.get(
  "/lecture/:lectureID",
  attendanceController.getAttendanceByLectureID
);

module.exports = router;
