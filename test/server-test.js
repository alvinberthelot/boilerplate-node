'use strict';

var chai = require('chai');
 // we are using the "expect" style of Chai
var expect = chai.expect;
var superagent = require('superagent');
var growl = require('growl');


describe('Basic routes', function() {

  it('GET / : Hello world!', function(done) {
    superagent.get('http://localhost:3000/')
    .end(function(e, res) {
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('Hello World!');
      done();
    });
  });

  afterEach(function() {
    if (this.currentTest.state == 'failed') {
      growl(this.currentTest.err.message, { title: this.currentTest.title, image: './assets/poo.png' });
    }
  });

});
