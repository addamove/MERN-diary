const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const keys = require('./config/dev');

require('./models/User');
require('./services/passport');

app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: [keys.COOKIE_KEY],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login session

require('./routes/authRoutes')(app);
require('./routes/notesRoutes')(app);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
