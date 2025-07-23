const express = require('express');
const router = express.Router();
const { signup, verify, login } = require('../controllers/authController');

// Public routes
router.post('/signup', signup);
router.post('/verify', verify);
router.post('/login', login);

module.exports = router;
