var cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');

var auth = require('./routes/auth');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, '../client/build/'));

app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));
app.use(bodyParser.json());
// TODO: allow cross origin, remove it after development is done
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Request-With");
//   next();
// })
app.use(cors());


var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri);

//load passport strategies
app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./middleware/auth_checker');
app.use('/news', authCheckMiddleware);

app.use('/', indexRouter);
app.use('/auth', auth);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.json({ error: err });
  // res.send("404 Not Found!");
});

module.exports = app;
