/*
  mongoose user schema model that represents set of informations for user record in database.
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    default: 30
  }

});
module.exports = mongoose.model('User', userSchema);
