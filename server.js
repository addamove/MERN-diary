const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

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

app.use(cookieSession({
  name: 'session',
  keys: [keys.cookieKey],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session()); // persistent login session

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read',
    ],
  }),
);

app.get('/api/get_user', (req, res) => {
  res.send(req.user);
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

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
