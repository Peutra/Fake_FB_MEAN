var mongoose = require('mongoose')
var crypto = require('crypto')
var jwt = require('jsonwebtoken')
var path = require('path')
var config = require(path.join(__dirname, '../config/config.js'))

var Schema = mongoose.Schema
    ObjectId = Schema.ObjectId


var userSchema = new Schema({
        name     : {
          type: String,
          require: true
        },
        email    : {
          type: String,
          required: true
        },
        hash: String,
        salt: String
})

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
}

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
}

userSchema.methods.generateJswt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, config.secret);
}


var User = mongoose.model('User', userSchema)

module.exports = User
