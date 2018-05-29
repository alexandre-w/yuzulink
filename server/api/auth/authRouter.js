const authRouter = require('express').Router();
const authController = require('./authController');


authRouter.route('/login')
  .post(authController.login);

authRouter.route('/logout')
  .post(authController.logout);

authRouter.route('/google')
  .post(authController.google);

module.exports = authRouter ;
