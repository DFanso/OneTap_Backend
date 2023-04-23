const Assignment = require("../models/assignmentModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Staff = require("../models/staffModel");
// Function to create all
// Function to create a new faculty with nested documents

const insertAssignment = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { deadline,subject,title,degree,batch,description,staffId } = req.body;

  if (!deadline || !subject || !degree || !title || !batch || !description || !staffId) {
    return res.status(400).json({
      message: "Please enter all the fields",
    });
  }

  const assignment = await Assignment.create({
    deadline,
    subject,
    title,
    degree,
    batch,
    description,
    staffId,
  });

  if (assignment) {
    res.status(201).json({
      _id: assignment._id,
      deadline: assignment.deadline,
      subject: assignment.subject,
      title: assignment.title,
      degree: assignment.degree,
      batch: assignment.batch,
      description: assignment.description,
      staffId: assignment.staffId,
    });
  }
});

const getAssignmentData = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const assignment = await Assignment.find({ 
    batch: user.batch, 
    degree: user.degree,
  });
  
  if (assignment.length > 0) {
    res.json(assignment);
  } else {
    res.status(404);
    throw new Error("Assignments not found");
  }
});


const getStaffAssignmentData = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.staff._id);
  const assignment = await Assignment.find({ 
    staffId: staff.staffId, 
  });
  
  if (assignment.length > 0) {
    res.json(assignment);
  } else {
    res.status(404);
    throw new Error("Assignments not found");
  }
});


module.exports = {insertAssignment, getAssignmentData, getStaffAssignmentData};
