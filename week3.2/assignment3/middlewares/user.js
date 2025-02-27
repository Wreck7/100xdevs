const { User } = require("../db/index");
const jwt = require('jsonwebtoken');
const jwtPass = "secret";

async function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const secWord = token.split(" ");
    const jwtToken = secWord[1]
    try{
    const decoded = jwt.verify(jwtToken, jwtPass);
    const user = await User.findOne({ username: decoded.username });
    if (user) {
        next();
    } else {
        res.status(401).send('user does not exist');
        console.log('else')
    }
}catch(e){
    res.json({
        msg: "Incorrect inputs"
    })
    console.log('catch', e)
}
}

module.exports = userMiddleware;