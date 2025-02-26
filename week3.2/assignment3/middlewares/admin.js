const { Admin } = require("../db/index");
const jwtPass = "secret";
const jwt = require('jsonwebtoken');

async function adminMiddleware(req, res, next) {
    const token = req.headers.authorization
    const secWord = token.split(" ")
    const jwtToken = secWord[1]
    try{
    const decoded = jwt.verify(jwtToken, jwtPass);
    const admin = await Admin.findOne({ username: decoded.username });
    if (admin) {
        next();
    } else {
        res.status(401).send('admin does not exist');
        console.log('else')
    }
}catch(e){
    res.json({
        msg: "Incorrect inputs"
    })
    console.log('catch')
}
}

module.exports = adminMiddleware;