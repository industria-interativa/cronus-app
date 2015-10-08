var mongoose = require('mongoose')
  , bcrypt = require('bcrypt-nodejs')

  , userSchema = new mongoose.Schema({
      
    local : {
      name: { type: String, default: '' }
    , email: { type: String, default: '' }
    , username: { type: String, default: '' }
    , password: { type: String, default: '' },
    }
      
  , facebook : {
      id: { type: String, default: '' }
    , token: { type: String, default: '' }
    , email: { type: String, default: '' }
    , name: { type: String, default: '' },
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
