const express = require('express');
const app = express();
const port = 3000;

app.get('/financialservice', (req, res) => {
  res.send('Financial Service Stub');
});

app.listen(port, () => {
  console.log(`Financial Service listening on port ${port}`);
});