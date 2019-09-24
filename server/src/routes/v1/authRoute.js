const express = require('express');
const AuthService = require('../../services/AuthService');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');


router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const authService = new AuthService();
    const signupResults = await authService.signup(email, password);
    res.status(200).json({ status: 1, token: signupResults.token });
  } catch (error) {
    res.status(422).json({ status: 0, message: error.message });
  }
});

router.get('/signup',authMiddleware, (req, res) => {
  res.status(200).send(`your email: ${req.user.email}`);
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ status: 0, message: 'Must provide email and password' });
    }
    const authService = new AuthService();
    const signinResults = await authService.signin(email, password);
    res.status(200).json({ status: 1, token: signinResults.token });
  } catch (error) {
    res.status(422).json({ status: 0, message: error.message });
  }
});

module.exports = (app) => {
  app.use('/', router);
};