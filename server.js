const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    console.log('Processing GET Request');
    res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
