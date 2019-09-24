const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../../web.config');
const User = mongoose.model('User');

module.exports = (req, res , next) => {
  const { authorization } = req.headers;
  if ( !authorization ) {
    return res.status(401).send({ error : 'You must be logged in.'});
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, config.secretKey, async (error, payload) => {
    if (error) {
      return res.status(401).send({ error : 'You must be logged in2.'});
    }
    req.user = await User.findById(payload.userId);
    next();
  });
};