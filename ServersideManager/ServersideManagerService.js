const express = require('express');
const app = express();
const port = 3000;

app.get('/serversidemanagerservice', (req, res) => {
  res.send('This is serverside manager service.');
});

app.listen(port, () => {
  console.log(`Serverside Manager Service Stub listening at http://localhost:${port}`);
});
