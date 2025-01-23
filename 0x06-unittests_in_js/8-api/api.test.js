const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  // Test for correct status code
  it('should return status code 200 for the index page', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  // Test for correct result
  it('should return the correct result for the index page', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test for other potential issues (e.g., Content-Type)
  it('should have a Content-Type header of text/html; charset=utf-8', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.headers['content-type']).to.include('text/html; charset=utf-8');
      done();
    });
  });
});
