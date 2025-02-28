const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*' // Allow all origins for testing. You may restrict it to your frontend's Azure domain later.
}));

app.get('/roll-result', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});