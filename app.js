// Todo : add socket.io for instant messages update io = require('socket.io').listen(server, { }); + (combined w/ socket io jwt)

// modules =================================================

var express       = require('express')
var morgan        = require('morgan')
var path          = require('path')
var favicon       = require('serve-favicon')
var logger        = require('morgan')
var cookieParser  = require('cookie-parser')
var passport      = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var mongoose      = require('mongoose')
var bodyParser    = require('body-parser')
var app           = express()
var server        = require('http').createServer(app)

// Connection to DB ==========================================

var dbconnection  = require('./app_server/models/connect_db').connectdb()

// controllers ==============================================

var CtrlAuth = require('./app_server/controllers/authentication');

// SPA view route ===========================================

var routeur = require('./app_server/routes/index')
app.use('/', routeur);

// Default Port =============================================

var PORT = ( process.env.PORT || 8080 );

// Passport config ==========================================

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: utils.secret
  }, function(jwt_payload, done) {
  User.findOne({ id: jwt_payload.id }, function(err, user) {
    if (err) return done(err, false);
    if (user) return  done(null, user);
    return done(null, false);
  });
}));

// error handlers ===========================================
// Catch unauthorised errors (see index.js routes)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// what part is this ? =======================================

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'));
app.use(passport.initialize())

server.listen(PORT, function() {
  console.log("Party started at http://localhost:" + PORT);
});

module.exports = app;
