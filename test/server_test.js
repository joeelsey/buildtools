'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;
var localhost = 'http://localhost:3000';

describe('test to show your ip', function() {
  it('should post ip to html', function(done) {
    chai.request(localhost)
      .get('/ip')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(typeof (res.body)).to.equal('string');
        done();
      });
  });

  it('should get your ip', function(done) {
    chai.request('http://jsonip.com')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('ip');
        done();
      });
  });
});
