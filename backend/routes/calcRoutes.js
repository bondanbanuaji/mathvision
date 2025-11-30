const express = require('express');
const { solve } = require('../controllers/calcController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/solve', protect, solve);

module.exports = router;
