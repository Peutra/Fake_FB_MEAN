var express       = require('express')
var routerApi     = express.Router()
var path          = require('path')
var jwt           = require('express-jwt')
var config        = require(path.join(__dirname, '../config/config.js'))
var User          = require(path.join(__dirname, '../models/user.js'))

var ctrlAuth     = require(path.join(__dirname, '../controllers/authentication.js'))

/* Authentication */

var auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

routerApi.post('/register', function(req, res, next) {
  var name = req.body.name
  var email = req.body.email
  var password = req.body.password
  ctrlAuth.register(req, res)
})

routerApi.post('/login', function(req, res, next) {
  var email = req.body.email
  var password = req.body.password
  ctrlAuth.login(req, res)
})


module.exports = routerApi;
