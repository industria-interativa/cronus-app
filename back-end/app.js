var express = require('express')
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , app = express()
  , db = require('./config/db');

app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = {};
api.users = require('./modules/users/routes');

app.use('/api/v1/users', api.users);

app.get('/api', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

module.exports = app;