const Attendance = require("../models/attendanceModel");
const User = require("../models/userModel"); // Replaced 'Student' with 'User' model
const Lecture = require("../models/timeTableModel");

// Add a new attendance record
exports.addAttendance = async (req, res) => {
  try {
    const { lectureID, studentID } = req.body;

    const lecture = await Lecture.findById(lectureID);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    const student = await User.findById(studentID); // Replaced 'Student' with 'User'
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const newAttendance = new Attendance({
      lectureID,
      studentID,
    });

    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while adding attendance", error });
  }
};

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
  try {
    const attendances = await Attendance.find().populate("lectureID studentID");
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching attendance records",
      error,
    });
  }
};

// Get attendance records by student ID
exports.getAttendanceByStudentID = async (req, res) => {
  try {
    const { studentID } = req.params;
    const attendances = await Attendance.find({ studentID }).populate(
      "lectureID"
    );
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while fetching attendance records for the student",
      error,
    });
  }
};

// Get attendance records by lecture ID
exports.getAttendanceByLectureID = async (req, res) => {
  try {
    const { lectureID } = req.params;
    const attendances = await Attendance.find({ lectureID }).populate(
      "studentID"
    );
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while fetching attendance records for the lecture",
      error,
    });
  }
};
