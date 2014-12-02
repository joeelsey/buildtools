'use strict';

var chai = require('chai');
var expect = chai.expect;

var truthy = require('../../routes/worthlessclientsidetest.js');

describe('client side test', function() {
  //its lame but it works
  it('should be true', function() {
    expect(truthy()).to.eql(true);
  });

});
