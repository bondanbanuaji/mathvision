const express = require('express');
const { plot } = require('../controllers/graphController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/plot', protect, plot);

module.exports = router;
