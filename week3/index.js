// const express = require('express');
// const app = express();

// app.get('/kidney', (req, res) => {
//     let userName = req.headers.username
//     let password = req.headers.password
//     let kidneyId = req.query.kidneyId
//     if (userName != "vishwa" || password != "pass") {
//         res.status(403).json({ msg: "User doesn't exist" })
//         return;
//     }
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(403).json({ msg: "wrong inputs" })
//         return;
//     }
//     res.json({ msg: "you are healthy" })
// });

// app.listen(3000, () => {
//     console.log('Server is running on port http://localhost:3000');
// });
const express = require('express');
const app = express();

function userCheck(req, res,next) {
    let userName = req.headers.username
    let password = req.headers.password
    if (userName != "vishwa" || password != "pass") {
        res.status(403).json({ msg: "User doesn't exist" })
    }else{
        next();
    }
}
function kidneyCheck(req, res, next) {
    let kidneyId = req.query.kidneyId
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({ msg: "wrong inputs" })
    }else{
        next();
    }
}
app.get('/kidney',userCheck, kidneyCheck, (req, res) => {
    res.json({ msg: "you are healthy" })
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});