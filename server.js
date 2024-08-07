const express = require('express');
const cors = require('cors');
const app = express();
const host = '127.0.0.1';
const port = 3000;
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    console.log('Processing GET Request');
    res.json({ message: 'Hello from Express!' });
});

app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});
