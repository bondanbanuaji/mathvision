const { evaluate } = require('mathjs');
const logger = require('../utils/logger');

exports.solveExpression = (expression) => {
  try {
    const result = evaluate(expression);
    return {
      expression,
      result: result.toString()
    };
  } catch (error) {
    logger.error('Math Solver Error', error);
    throw new Error('Invalid expression');
  }
};
