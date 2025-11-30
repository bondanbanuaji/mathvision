const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const env = require('./config/env');
const logger = require('./utils/logger');
const errorHandler = require('./middlewares/errorHandler');

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'MathVision API is running',
    version: '1.0.0'
  });
});

// Import routes
const authRoutes = require('./routes/authRoutes');
const ocrRoutes = require('./routes/ocrRoutes');
const calcRoutes = require('./routes/calcRoutes');
const graphRoutes = require('./routes/graphRoutes');
const historyRoutes = require('./routes/historyRoutes');
const chatRoutes = require('./routes/chatRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/ocr', ocrRoutes);
app.use('/api/calc', calcRoutes);
app.use('/api/graph', graphRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/chat', chatRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
