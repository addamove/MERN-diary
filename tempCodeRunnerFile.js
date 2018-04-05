const mongoose = require('mongoose');

const { Schema } = mongoose;


const keys = require('./config/keys');

mongoose.connect(keys.MONGO);

const userSchema = Schema({
  googleId: String,
});

mongoose.model('users', userSchema);

const User = mongoose.model('users');
new User({ googleId: 666 });