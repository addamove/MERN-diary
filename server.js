const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose');

const { Schema } = mongoose;

const app = express();
const port = process.env.PORT || 3000;
const keys = require('./config/keys');

mongoose.connect(keys.MONGO);

const userSchema = Schema({
  googleId: String,
});

mongoose.model('users', userSchema);

const User = mongoose.model('users');
new User({ googleId: 666 });

passport.use(new GoogleStrategy(
  {
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true,
  },
  (request, accessToken, refreshToken, profile, done) =>
    new User({ googleId: profile.id }).save(),
));

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read',
    ],
  }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/success',
    failureRedirect: '/',
  }),
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
