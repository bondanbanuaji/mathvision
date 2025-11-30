const sendResponse = require('../utils/responseHandler');

exports.sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    // Mock AI response for now
    const response = `I received your message: "${message}". I am a simple bot for now.`;
    sendResponse(res, 200, { response });
  } catch (err) {
    next(err);
  }
};
