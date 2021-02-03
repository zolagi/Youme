const mongoose = require("mongoose");

const user_Schema = mongoose.Schema({
  name: {
    type: String,
  },
  user_name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  repeat_password: {
    type: String,
  },

  gender: {
    type: String,
  },
  birth_date: {
    type: Date,
  },

  agreement: {
    type: Boolean,
  },
  remember_me: {
    type: Boolean,
  },
});

const user_model = mongoose.model("users", user_Schema);

module.exports = user_model;
