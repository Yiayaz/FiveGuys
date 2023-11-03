const express = require('express');
const app = express();
const port = 3000;

app.get('/circuitbre', (req, res) => {
  res.send('This is circuit breaker service.');
});

app.listen(port, () => {
  console.log(`Circuit breaker  Service Stub listening at http://localhost:${port}/`);
});
