var express = require('express')
  , app = express()
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , passport = require('passport')
  , flash    = require('connect-flash')
  , flash = require('connect-flash')
  , morgan = require('morgan')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , db = require('./config/db');

require('./config/passport')(passport);

app.disable('x-powered-by');

app.use(cors());

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({ secret: 'meanstack1997' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./modules/routes.js')(app, passport);

var api = {};
api.users = require('./modules/users/routes');

app.use('/api/v1/users', api.users);

app.get('/api', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

module.exports = app;