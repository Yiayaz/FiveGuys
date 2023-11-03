const express = require('express');
const app = express();
const PORT = 3000;


app.get('/creatorsidehistory', (req, res) => {
    res.json({ message: 'Creatorside_History running...' });
});


app.listen(PORT, () => {
    console.log(`Creatorside_history open ${PORT} ...`);
});