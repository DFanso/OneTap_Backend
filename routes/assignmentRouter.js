const express = require('express');
const {insertAssignment, getAssignmentData, getStaffAssignmentData} = require('../controllers/assignmentController');
const {protect} = require('../middleware/authMiddleware');
const {staffProtect} = require('../middleware/staffAuthMiddleware');


const router = express.Router();

router.route("/").post(insertAssignment);
router.get("/user-assignment",protect,getAssignmentData);
router.get("/staff-assignment",staffProtect,getStaffAssignmentData);


module.exports = router;
