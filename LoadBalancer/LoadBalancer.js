const express = require('express');
const app = express();
const port = 3000;

app.get('/loadbalancer', (req, res) => {
  res.send('Load Balancer Stub');
});

app.listen(port, () => {
  console.log(`Load Balancer listening on port ${port}`);
});