const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


passport.use(
    new GoogleStrategy({
        clientID: keys.googleAuthApi.clientID,
        clientSecret: keys.googleAuthApi.clientSecret,
        callbackURL: keys.googleAuthApi.callbackURL
    }), ()=>{
        //passport callback function
    }
);