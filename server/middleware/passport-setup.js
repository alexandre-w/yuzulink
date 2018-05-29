const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


passport.use(
    new GoogleStrategy({
        clientID: keys.googleAuthApi.client_id,
        clientSecret: keys.googleAuthApi.client_secret,
        callbackURL: "/api/auth/google/redirect"
    }, ()=>{
        //passport callback function
    })
);
