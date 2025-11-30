const mongoose = require('mongoose');

const MathHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['calculation', 'scan', 'graph'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  result: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MathHistory', MathHistorySchema);
