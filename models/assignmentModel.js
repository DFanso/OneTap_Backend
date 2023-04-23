const mongoose = require('mongoose');

// Define the Mongoose schemas and models
const assignmentSchema = new mongoose.Schema({
  deadline: String,
  title: String,
  subject: String,
  degree: String,
  batch: String,
  description: String,
  staffId: String,
});


const Assignment = mongoose.model("Assignment",assignmentSchema)

module.exports = Assignment;