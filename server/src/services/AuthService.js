const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const config = require('../../web.config');

module.exports = class AuthService {

  async signup(email, password) {
    try {
      const user = new User({email, password});
      await user.save();
      const token = this.generateToken({ userId: user._id });
      return { token, user };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signin(email, password) {
    try {
      const user = await User.findOne({email});
      if (!user) {
        console.log('user not found', email);
        throw new Error('user not found');
      }
      await user.comparePassword(password);
      const token = this.generateToken({userId: user._id});
      return { token, user };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  generateToken(cookieContent) {
    return jwt.sign(cookieContent, config.secretKey);
  }
}