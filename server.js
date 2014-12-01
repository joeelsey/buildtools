'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.static(__dirname + '/build'));

var request = require('superagent');
  
  app.get('/ip', function(req, res) {
    var jsonip = 'http://jsonip.com';

    request
      .get(jsonip)
      .end(function(err, jsondata) {
        if (err) res.status(500).send(err);
        var parsedData = JSON.parse(jsondata.text);
        var ip = parsedData.ip;
        res.json('Your ip address is: ' + ip);
      });
  });

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
