const express = require('express');
const { getHistory, addHistory } = require('../controllers/historyController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getHistory)
  .post(addHistory);

module.exports = router;
