const User = require('../db/index').User;
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username } = req.headers;
    User.findOne({ username: username })
        .then(function (value) {
            if (value) {
                next();
            } else {
                res.status(401).json({ message: 'User does not exist' })
            }
        })
}

module.exports = userMiddleware;