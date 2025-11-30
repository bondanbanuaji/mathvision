const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/mathvision',
  JWT_SECRET: process.env.JWT_SECRET || 'secret_key_change_me',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d',
};
