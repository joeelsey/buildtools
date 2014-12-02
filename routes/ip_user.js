'use strict';

module.exports = function(app){
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
}
//cheapo client side test
 module.exports = function Truthy(){
    return true;
  };
