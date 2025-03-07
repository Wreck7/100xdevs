const { User } = require('../db/index')
function userMiddleware(req, res, next) {
    const {username, password} = req.headers
    const check = User.findOne({username: username})
    check.then(function(val) {
        if(!val){
            res.status(403).json({message: "user doesn't exists"})
        }else{
            next()
        }
    })
}

module.exports =  userMiddleware