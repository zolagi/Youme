const mongoose = require("mongoose");

const user_Schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass_word: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
    unique: false,
  },
  birth_date: {
    type: Date,
    required: true,
    unique: false,
  },

  agreement: {
    type: bool,
    required: true,
    unique: false,
  },
  remember_me: {
    type: bool,
    required: true,
    unique: false,
  },
});

const user_model = mongoose.model("users", user_Schema);

module.exports = user_model;
