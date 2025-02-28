const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

function sum(a,b) {
    return a+b;
}
app.get('/sum', (req,res) =>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send(sum(a,b).toString());
})

app.listen(3000)