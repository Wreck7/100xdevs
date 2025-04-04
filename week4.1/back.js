const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

function sum(a, b) {
    return a + b;
}
app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(sum(a, b).toString());
})

app.get('/interest', function (req, res) {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
        interest: interest.toString(),
        total: total.toString()
    })
})

app.listen(3000)