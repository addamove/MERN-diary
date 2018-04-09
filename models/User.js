const mongoose = require('mongoose');
const keys = require('../config/keys');

const { Schema } = mongoose;

mongoose.connect(keys.MONGO);

const userSchema = Schema({
  googleId: String,
});

mongoose.model('users', userSchema);
