const request = require('request');
const { expect } = require('chai');
const app = require('./api');

// Server URL
const baseUrl = 'http://localhost:7865';

// Tests
describe('API Integration Tests', () => {
  before((done) => {
    app.listen(7865, () => {
      console.log('Test server running on port 7865');
      done();
    });
  });

  // Test: GET /
  describe('GET /', () => {
    it('should return "Welcome to the payment system" and status 200', (done) => {
      request.get(`${baseUrl}/`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // Test: GET /cart/:id
  describe('GET /cart/:id', () => {
    it('should return "Payment methods for cart :id" for valid id', (done) => {
      request.get(`${baseUrl}/cart/12`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 for invalid id', (done) => {
      request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test: GET /available_payments
  describe('GET /available_payments', () => {
    it('should return correct payment methods JSON', (done) => {
      request.get(`${baseUrl}/available_payments`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  // Test: POST /login
  describe('POST /login', () => {
    it('should return "Welcome :username" for valid username', (done) => {
      request.post(
        {
          url: `${baseUrl}/login`,
          json: { userName: 'Betty' },
        },
        (err, res, body) => {
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Betty');
          done();
        }
      );
    });
  });
});
