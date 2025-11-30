const express = require('express');
const multer = require('multer');
const { scanImage } = require('../controllers/ocrController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/scan', protect, upload.single('image'), scanImage);

module.exports = router;
