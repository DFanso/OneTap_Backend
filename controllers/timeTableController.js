const Lecture = require("../models/timeTableModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Staff = require("../models/staffModel");
// Function to create all
// Function to create a new faculty with nested documents

const insertUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { date,subject,faculty,degree,batch,startTime,endTime,location,staffId } = req.body;

  if (!date || !subject || !faculty || !degree || !batch || !startTime || !endTime || !location || !staffId) {
    return res.status(400).json({
      message: "Please enter all the fields",
    });
  }

  const lecture = await Lecture.create({
    date,
    subject,
    faculty, // Use the plain-text password here, as the pre-save middleware will handle the hashing.
    degree,
    batch,
    startTime,
    endTime,
    location,
    staffId,
  });

  if (lecture) {
    res.status(201).json({
      _id: lecture._id,
      date: lecture.date,
      subject: lecture.subject,
      faculty: lecture.faculty,
      degree: lecture.degree,
      batch: lecture.batch,
      startTime: lecture.startTime,
      endTime: lecture.endTime,
      location: lecture.location,
      staffId: lecture.staffId,
    });
  }
});

const getLectureData = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const lectures = await Lecture.find({ 
    batch: user.batch, 
    degree: user.degree,
  });
  
  if (lectures.length > 0) {
    res.json(lectures);
  } else {
    res.status(404);
    throw new Error("Lectures not found");
  }
});


const getStaffLectureData = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.staff._id);
  const lectures = await Lecture.find({ 
    staffId: staff.staffId, 
  });
  
  if (lectures.length > 0) {
    res.json(lectures);
  } else {
    res.status(404);
    throw new Error("Lectures not found");
  }
});


module.exports = {insertUser, getLectureData, getStaffLectureData};
