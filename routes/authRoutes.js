module.exports = (app, passport) => {
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
};
