const express = require('express');
const {insertUser, getLectureData} = require('../controllers/timeTableController');
const {protect} = require('../middleware/authMiddleware');

const router = express.Router();

router.route("/").post(insertUser);
router.get("/user-lectures",protect,getLectureData);

module.exports = router;
