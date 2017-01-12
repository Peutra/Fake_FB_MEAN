var passport = require('passport');
var mongoose = require('mongoose');
var path = require('path')
var User = require(path.join(__dirname, '../models/user.js'))

var register = function(req, res) {
  var user = new User()

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password)

  user.save(function(err) {
    var token
    token = user.generateJswt()
    res.status(200)
    res.json({
      "token" : token
    });
  });
};

var login = function(req, res) {

  passport.authenticate('local', function(err, user, info) {
    var token;

    if (err) {
      res.status(404).json(err)
      return;
    }
    if (user) {
      token = user.generateJswt();
      res.status(200)
      res.json({
        "token" : token
      })
    } else {
      res.status(401).json(info)
    }
  })(req, res)
}

exports.register = register
exports.login    = login
