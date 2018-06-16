const authRouter = require('express').Router();
const authController = require('./authController');
const passport = require("passport");


authRouter.route('/login')
  .get(authController.login);

authRouter.route('/logout')
  .get(authController.logout);


authRouter.route('/google')
  .get(passport.authenticate('google', { scope: ['profile', 'email'] } ));

authRouter.route('/google/redirect')
  .get(passport.authenticate('google'), authController.googleRedirect);
  

module.exports = authRouter ;
