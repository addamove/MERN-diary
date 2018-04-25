const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
  app.post('/api/save_note', requireLogin, async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    user.notes.push(req.body);
    const Data = await user.save();
    console.log(Data);

    res.sendStatus(200);
  });
};
