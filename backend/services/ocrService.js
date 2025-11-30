const Tesseract = require('tesseract.js');
const logger = require('../utils/logger');

exports.processImage = async (imageBuffer) => {
  try {
    const { data: { text } } = await Tesseract.recognize(
      imageBuffer,
      'eng',
      { logger: m => logger.debug(m) }
    );
    return text;
  } catch (error) {
    logger.error('OCR Processing Error', error);
    throw new Error('Failed to process image');
  }
};
