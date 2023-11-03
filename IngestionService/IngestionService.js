const express = require('express');
const app = express();
const port = 3000;

app.get('/ingestionservice', (req, res) => {
  res.send('Injestion Service Stub');
});

app.listen(port, () => {
  console.log(`Injestion Service listening on port ${port}`);
});