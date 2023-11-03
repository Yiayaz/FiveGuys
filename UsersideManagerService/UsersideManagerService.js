const express = require('express');
const app = express();
const port = 3000;

app.get('/usersidemanagerservice', (req, res) => {
  res.send('Userside Manager Service Stub');
});

app.listen(port, () => {
  console.log(`Userside Manager Service listening on port ${port}`);
});