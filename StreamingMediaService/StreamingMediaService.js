const express = require('express');
const app = express();
const port = 3000;

app.get('/streamingmediaservice', (req, res) => {
  res.send('Streaming Media Service Stub');
});

app.listen(port, () => {
  console.log(`Streaming Media Service listening on port ${port}`);
});