const express = require('express');
const app = express();

app.use(express.json());

app.post('/kidney-check', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send('you have ' + kidneysLength + 'kidneys');
})
// global cache
app.use(function(err, req, res, next){
    res.send('something went wrong');
})

app.listen(3001);