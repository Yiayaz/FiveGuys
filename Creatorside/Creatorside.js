const express = require('express');
const app = express();
const port = 3000;

app.get('/creatorside', (req, res) => {
  res.send('This is Creatorside service.');
});

app.listen(port, () => {
  console.log(`Creatorside Service Stub listening at http://localhost:${port}/`);
});
