const express = require('express');
const app = express();
const port = 3000;

app.get('/subscriptionservice', (req, res) => {
  res.send('Subscription Service Stub');
});

app.listen(port, () => {
  console.log(`Subscription Service listening on port ${port}`);
});