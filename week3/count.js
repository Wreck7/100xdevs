const express = require('express')
const app = express()

let requests = 0;
function calculateRequests(req, res, next) {
    requests++;
    console.log(requests);
    next();
}
app.use(calculateRequests); // this is used for all routes automatically
app.get('/', function (req, res) {
    res.send('request is counted')
})
app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function (req, res) {
    res.status(200).json({ requests });
});
app.listen(4000);