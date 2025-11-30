const env = require('./env');

module.exports = {
  secret: env.JWT_SECRET,
  expire: env.JWT_EXPIRE
};
