const express = require('express');
const app = express();
const PORT = 3000;



app.get('/usersidehistory', (req, res) => {
    res.json({ message: 'Userside_History running...' });
});



app.listen(PORT, () => {
    console.log(`Userside_history open ${PORT} ...`);
});