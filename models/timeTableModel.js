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
});

const batchSchema = new mongoose.Schema({
  name: String,
  lectures: [lectureSchema],
});

const degreeSchema = new mongoose.Schema({
  name: String,
  batches: [batchSchema],
});

const facultySchema = new mongoose.Schema({
  name: String,
  degrees: [degreeSchema],
});

const Lecture = mongoose.model('Lecture', lectureSchema);
const Batch = mongoose.model('Batch', batchSchema);
const Degree = mongoose.model('Degree', degreeSchema);
const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Lecture;
module.exports = Batch;
module.exports = Degree;
module.exports = Faculty;


