const express = require('express');
const { sendMessage } = require('../controllers/chatController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/send', protect, sendMessage);

module.exports = router;
