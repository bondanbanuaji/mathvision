const solverService = require('../services/solverService');
const sendResponse = require('../utils/responseHandler');

exports.solve = async (req, res, next) => {
  try {
    const { expression } = req.body;

    if (!expression) {
      return res.status(400).json({ success: false, message: 'Please provide an expression' });
    }

    const result = solverService.solveExpression(expression);

    sendResponse(res, 200, result);
  } catch (err) {
    next(err);
  }
};
