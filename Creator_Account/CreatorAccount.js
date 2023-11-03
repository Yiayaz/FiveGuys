const express = require('express');
const app = express();
const PORT = 3000;

app.get('/creatoraccount', (req, res) => {
    res.json({ message: 'Creator_Account running...' });
});

app.listen(PORT, () => {
    console.log(`Creator_Account open  ${PORT} ...`);
});
