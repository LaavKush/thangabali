const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const role = require('../middleware/role');
const { processPayment } = require('../controllers/paymentController');

router.post('/process', auth, role('buyer'), processPayment);

module.exports = router;
