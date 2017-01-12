var express       = require('express')
var router        = express.Router()
var path          = require('path')
var jwt           = require('express-jwt')
var config        = require(path.join(__dirname, '../config/config.js'))

var auth = jwt({
  secret: config.secret,
  userProperty: 'payload'
});

// Spa's default route
router.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') })
});

module.exports = router;
