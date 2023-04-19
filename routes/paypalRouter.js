const express = require('express');
const {createPayment} = require('../controllers/paypalController');

const router = express.Router();

router.route("/").post(createPayment);

module.exports = router;
