const express = require('express');
const app = express();
const port = 3000;

app.get('/creatorsideman', (req, res) => {
  res.send('This is creatorside manager service.');
});

app.listen(port, () => {
  console.log(`Creatorside Manager Service Stub listening at http://localhost:${port}/`);
});
