const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the attendance schema
const attendanceSchema = new Schema({
  lectureID: {
    type: Schema.Types.ObjectId,
    ref: "Lecture",
    required: true,
  },
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the attendance model
const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
