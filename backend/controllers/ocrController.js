const ocrService = require('../services/ocrService');
const sendResponse = require('../utils/responseHandler');

exports.scanImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload an image' });
    }

    const text = await ocrService.processImage(req.file.buffer);

    sendResponse(res, 200, { text });
  } catch (err) {
    next(err);
  }
};
