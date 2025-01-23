const request = require('supertest');
const app = require('./api'); // Import the API

describe('API Integration Tests', () => {
  let server;

  before((done) => {
    // Start server only once
    server = app.listen(7865, () => {
      done();
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        done(new Error('Port 7865 already in use'));
      } else {
        done(err);
      }
    });
  });

  after(() => {
    // Close the server after all tests
    server.close();
  });

  it('GET / returns correct response', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Welcome to the payment system', done);
  });

  it('GET /cart/:id with valid id returns correct response', (done) => {
    request(app)
      .get('/cart/12')
      .expect(200, 'Payment methods for cart 12', done);
  });

  it('GET /cart/:id with invalid id returns 404', (done) => {
    request(app)
      .get('/cart/abc')
      .expect(404, done);
  });

  it('GET /available_payments returns correct response', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200, {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      }, done);
  });

  it('POST /login with username returns correct response', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Content-Type', 'application/json')
      .expect(200, 'Welcome Betty', done);
  });
});
