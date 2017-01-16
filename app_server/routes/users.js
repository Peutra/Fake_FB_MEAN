var express       = require('express')
var routerApi     = express.Router()
var path          = require('path')
var jwt           = require('express-jwt')
var config        = require(path.join(__dirname, '../config/config.js'))
var User          = require(path.join(__dirname, '../models/user.js'))
var ctrlAuth      = require(path.join(__dirname, '../controllers/authentication.js'))
var ctrlProfile   = require(path.join(__dirname, '../controllers/profile.js'))

/* Authentication */

var auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

routerApi.post('/register', function(req, res, next) {
  ctrlAuth.register(req, res)
})

routerApi.post('/login', function(req, res, next) {
  ctrlAuth.login(req, res)
})

routerApi.get('/profile', auth, ctrlProfile.profileRead);


module.exports = routerApi;
