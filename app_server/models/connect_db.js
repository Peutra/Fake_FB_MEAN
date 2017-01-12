var mongoose        = require('mongoose')
var ObjectID        = require('mongodb').ObjectID
var dbURI           = 'localhost/twitter_mean'

var connectdb = function() {
  mongoose.connect('mongodb://' + dbURI)
}

exports.connectdb = connectdb
