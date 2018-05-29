const authRouter = require('express').Router();
const authController = require('./authController');
const passport = require("passport");


authRouter.route('/login')
  .get(authController.login);

authRouter.route('/logout')
  .get(authController.logout);


authRouter.route('/google')
  .get(authController.google);

authRouter.route('/google/redirect')
  .get(authController.googleRedirect);
  

module.exports = authRouter ;
