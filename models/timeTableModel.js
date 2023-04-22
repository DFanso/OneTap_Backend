const mongoose = require('mongoose');

// Define the Mongoose schemas and models
const lectureSchema = new mongoose.Schema({
  date: String,
  subject: String,
  faculty: String,
  degree: String,
  batch: String,
  startTime: String,
  endTime: String,
  location: String,
  staffId: String,
});


const Lecture = mongoose.model("Lecture",lectureSchema)

module.exports = Lecture;