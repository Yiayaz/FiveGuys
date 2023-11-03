const express = require('express');
const app = express();
const port = 3000;

app.get('/serverside', (req, res) => {
  res.send('This is serverside service.');
});

app.listen(port, () => {
  console.log(`Serverside Service Stub listening at http://localhost:${port}/`);
});
