'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

require('./routes/ip_user.js')(app);

app.use(express.static(__dirname + '/build'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
