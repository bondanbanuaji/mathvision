const sendResponse = require('../utils/responseHandler');
const { evaluate } = require('mathjs');

exports.plot = async (req, res, next) => {
  try {
    const { expression, range = [-10, 10] } = req.body;

    if (!expression) {
      return res.status(400).json({ success: false, message: 'Please provide an expression' });
    }

    const xValues = [];
    const yValues = [];
    const step = 0.5;

    for (let x = range[0]; x <= range[1]; x += step) {
      try {
        const y = evaluate(expression, { x });
        xValues.push(x);
        yValues.push(y);
      } catch (e) {
        // Ignore undefined points
      }
    }

    sendResponse(res, 200, { x: xValues, y: yValues });
  } catch (err) {
    next(err);
  }
};
