const express = require('express');
const router = express.Router();
const lectureController = require('../controllers/timeTableController');
const batchController = require('../controllers/timeTableController');
const degreeController = require('../controllers/timeTableController');
const facultyController = require('../controllers/timeTableController');

// Routes for Lecture model
router.post('/lectures', lectureController.createLecture);
router.get('/lectures', lectureController.getLectures);
router.get('/lectures/:id', lectureController.getLecture);
router.put('/lectures/:id', lectureController.updateLecture);
router.delete('/lectures/:id', lectureController.deleteLecture);

// Routes for Batch model
router.post('/batches', batchController.createBatch);
router.get('/batches', batchController.getBatches);
router.get('/batches/:id', batchController.getBatch);
router.put('/batches/:id', batchController.updateBatch);
router.delete('/batches/:id', batchController.deleteBatch);

// Routes for Degree model
router.post('/degrees', degreeController.createDegree);
router.get('/degrees', degreeController.getDegrees);
router.get('/degrees/:id', degreeController.getDegree);
router.put('/degrees/:id', degreeController.updateDegree);
router.delete('/degrees/:id', degreeController.deleteDegree);

// Routes for Faculty model
router.post('/faculties', facultyController.createFaculty);
router.get('/faculties', facultyController.getFaculties);
router.get('/faculties/:id', facultyController.getFaculty);
router.put('/faculties/:id', facultyController.updateFaculty);
router.delete('/faculties/:id', facultyController.deleteFaculty);

module.exports = router;
