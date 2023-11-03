const express = require('express');
const app = express();
const port = 3000;

app.get('/adminaccountservice', (req, res) => {
  res.send('Admin Account Service Stub');
});

app.listen(port, () => {
  console.log(`Admin Account Service listening at http://localhost:${port}/`);
});
