const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 + num2;
    res.send(result.toString());
});

app.get('/interest', (req, res) => {
    console.log('yes');
    const amt = parseInt(req.query.amt);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const result = (amt * rate * time) / 100;
    res.send(result.toString());
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});