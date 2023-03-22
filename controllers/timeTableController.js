const Lecture = require('../models/timeTableModel');
const Batch = require('../models/timeTableModel');
const Degree = require('../models/timeTableModel');
const Faculty = require('../models/timeTableModel');

// Function to create a new lecture
exports.createLecture = async (req, res) => {
  try {
    const lecture = new Lecture(req.body);
    await lecture.save();
    res.status(201).json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all lectures
exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single lecture
exports.getLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a lecture
exports.updateLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    Object.assign(lecture, req.body);
    await lecture.save();
    res.json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to delete a lecture
exports.deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    await lecture.remove();
    res.json({ message: 'Lecture deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Function to create a new batch
exports.createBatch = async (req, res) => {
  try {
    const batch = new Batch(req.body);
    await batch.save();
    res.status(201).json(batch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all batches
exports.getBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.json(batches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single batch
exports.getBatch = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    res.json(batch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a batch
exports.updateBatch = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    Object.assign(batch, req.body);
    await batch.save();
    res.json(batch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to delete a batch
exports.deleteBatch = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    await batch.remove();
    res.json({ message: 'Batch deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Function to create a new degree
exports.createDegree = async (req, res) => {
  try {
    const degree = new Degree(req.body);
    await degree.save();
    res.status(201).json(degree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all degrees
exports.getDegrees = async (req, res) => {
  try {
    const degrees = await Degree.find();
    res.json(degrees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single degree
exports.getDegree = async (req, res) => {
  try {
    const degree = await Degree.findById(req.params.id);
    if (!degree) {
      return res.status(404).json({ message: 'Degree not found' });
    }
    res.json(degree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a degree
exports.updateDegree = async (req, res) => {
  try {
    const degree = await Degree.findById(req.params.id);
    if (!degree) {
      return res.status(404).json({ message: 'Degree not found' });
    }
    Object.assign(degree, req.body);
    await degree.save();
    res.json(degree);
  } catch (error) {
    res.status(500).json({message: error.message });
}
};

// Function to delete a degree
exports.deleteDegree = async (req, res) => {
try {
const degree = await Degree.findById(req.params.id);
if (!degree) {
return res.status(404).json({ message: 'Degree not found' });
}
await degree.remove();
res.json({ message: 'Degree deleted' });
} catch (error) {
res.status(500).json({ message: error.message });
}
};


// Function to create a new faculty
exports.createFaculty = async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all faculties
exports.getFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single faculty
exports.getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a faculty
exports.updateFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    Object.assign(faculty, req.body);
    await faculty.save();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to delete a faculty
exports.deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    await faculty.remove();
    res.json({ message: 'Faculty deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
