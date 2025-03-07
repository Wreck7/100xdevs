const { Admin } = require('../db/index')
function adminMiddleware(req, res, next) {
    const {username, password} = req.headers
    const check = Admin.findOne({username: username, password: password})
    check.then(function(val) {
        if(!val){
            res.status(403).json({message: "admin doesn't exists"})
        }else{
            next()
        }
    })
}

module.exports =  adminMiddleware