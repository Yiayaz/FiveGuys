
const express = require('express');
const app = express();
const PORT = 3000;



app.get('/useraccount', (req, res) => {
    res.json({ message: 'User_Account running...' });
});



app.listen(PORT, () => {
    console.log(`User_account open ${PORT} ...`);
});