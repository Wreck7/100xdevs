// Middleware for handling auth
const Admin = require('../db/index').Admin;
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username } = req.headers;
    Admin.findOne({ username: username })
        .then(function (value) {
            if (value) {
                next();
            } else {
                res.status(401).json({ message: 'Admin does not exist' })
            }
        })
}

module.exports = adminMiddleware;