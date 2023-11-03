const express = require('express');
const app = express();
const port = 3000;

app.get('/apigateways', (req, res) => {
  res.send('Api Gateway Stub');
});

app.listen(port, () => {
  console.log(`Api Gateway listening on port ${port}`);
});