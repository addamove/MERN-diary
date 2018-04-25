const mongoose = require('mongoose');
const keys = require('../config/keys');

const { Schema } = mongoose;

mongoose.connect(keys.MONGO);

const notes = new Schema({
  text: String,
  date: Date,
});

const userSchema = Schema({
  googleId: String,
  notes: [notes],
});

mongoose.model('users', userSchema);
