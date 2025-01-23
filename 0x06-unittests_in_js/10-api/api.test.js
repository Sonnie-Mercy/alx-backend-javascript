// api.test.js

const request = require('request');
const { expect } = require('chai');

describe('API tests', () => {
  
  // Test for /available_payments endpoint
  describe('GET /available_payments', () => {
    it('should return the correct payment methods', (done) => {
      request('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  // Test for /login endpoint
  describe('POST /login', () => {
    it('should return welcome message with username', (done) => {
      request.post('http://localhost:7865/login', {
        json: { userName: 'Betty' }
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

});
