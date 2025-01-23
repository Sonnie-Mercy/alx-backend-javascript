const express = require('express');
const app = express();

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  const idRegex = /^\d+$/; // Validate if id is a number

  if (idRegex.test(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});
