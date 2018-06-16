const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const userController = require('../api/user/userController');


passport.use(
    new GoogleStrategy({
        clientID: keys.googleAuthApi.client_id,
        clientSecret: keys.googleAuthApi.client_secret,
        callbackURL: "/api/auth/google/redirect"
    }, function(accessToken, refreshToken, profile, cb ) {
        console.log('CB de passport');
        userController.findOrCreateWithGoogleId(profile, cb);
    })
);
