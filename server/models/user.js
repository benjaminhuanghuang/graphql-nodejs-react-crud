/*
  mongoose user schema model that represents set of informations for user record in database.
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const validator = require("validator");

// create a mongoose model
var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  tokens: [
    {
      access: {  // the token type
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = { User };
