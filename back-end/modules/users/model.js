var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  password: { type: String, default: '' },
})

module.exports = mongoose.model('User', userSchema);
