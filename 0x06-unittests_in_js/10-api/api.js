// api.js

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Existing GET /cart/:id route
app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;
  if (isNaN(cartId)) {
    return res.status(404).send('Not Found');
  }
  return res.send(`Payment methods for cart ${cartId}`);
});

// New GET /available_payments route
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New POST /login route
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
