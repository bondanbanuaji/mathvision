const MathHistory = require('../models/MathHistory');
const sendResponse = require('../utils/responseHandler');

exports.getHistory = async (req, res, next) => {
  try {
    const history = await MathHistory.find({ user: req.user.id }).sort('-createdAt');
    sendResponse(res, 200, history);
  } catch (err) {
    next(err);
  }
};

exports.addHistory = async (req, res, next) => {
  try {
    const history = await MathHistory.create({
      user: req.user.id,
      ...req.body
    });
    sendResponse(res, 201, history);
  } catch (err) {
    next(err);
  }
};
