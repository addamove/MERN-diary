const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
const keys = require('../config/dev');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(new GoogleStrategy(
  {
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true,
  },
  (request, accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id }).save().then((user) => {
          done(null, user);
        });
      }
    });
  },
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
