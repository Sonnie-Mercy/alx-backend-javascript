const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7865;

app.use(bodyParser.json());

// Route: GET /
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Route: GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    return res.status(404).send('Not Found');
  }
  res.status(200).send(`Payment methods for cart ${id}`);
});

// Route: GET /available_payments
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Route: POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
