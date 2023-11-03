const express = require('express');
const app = express();
const port = 3000;

app.get('/usersideservice', (req, res) => {
  res.send('Userside Service Stub');
});

app.listen(port, () => {
  console.log(`Userside Service listening on port ${port}`);
});