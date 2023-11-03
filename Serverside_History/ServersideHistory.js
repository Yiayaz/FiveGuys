
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/serversidehistory', (req, res) => {
    res.json({ message: 'Serverside_History running...' });
});


app.listen(PORT, () => {
    console.log(`Serverside_history open ${PORT} ...`);
});