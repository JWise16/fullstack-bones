const express = require('express');
const router = express.Router();
const { validateToken } = require('../middleware/auth');
const testController = require('../controllers/testController');

// Public route
router.get('/', testController.getPublic);

// Protected route
router.get('/protected', validateToken, testController.getProtected);

module.exports = router; 