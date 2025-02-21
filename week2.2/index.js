const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.status(402).send('Hello, World!');
});
app.post('/body', function(req, res) {
    console.log(req.body);
    res.send("<b>Hello, World!</b>");
});
app.post('/bolding', function(req, res) {
    res.send("<b>Hello, World!</b>");
    console.log(req.headers.mothername);
});
app.get('/json', function(req, res) {
    res.json({
        name: "Vishwa Govula",
        age: 19
    });
});

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`);
});