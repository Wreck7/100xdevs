const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPass = "9959888391";

app.use(express.json());


const allUsers = [
    {
        userName: 'vishwa07@gmail.com',
        password: 'vishwa@123',
        name: 'vishwa'
    },
    {
        userName: 'karthik@gmail.com',
        password: 'karthik@123',
        name: 'karthik'
    },
    {
        userName: 'tejas@gmail.com',
        password: 'tejas@123',
        name: 'tejas'
    },
    {
        userName: 'saharsh@gmail.com',
        password: 'saharsh@123',
        name: 'saharsh'
    },
]

// function userExists(userName, password) {
//     const check = allUsers.find(user => {
//         if (user.userName === userName && user.password === password) {
//             return true;
//         } else {
//             return false
//         }
//     })
//     return check;
// }
function userExists(userName, password) {
    return allUsers.some(user => user.userName === userName && user.password === password);
}

function notMeButOthers(userName) {
    return allUsers.filter(user => user.userName !== userName);
}

app.get('/users', function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPass);
        const userName = decoded.username;
        res.json({
            users: notMeButOthers(userName)
        })
    }catch(e){
        res.status(403).json({
            message: 'invalid token'
        })
    }
})

app.post('/signin', function (req, res) {
    const { userName, password } = req.body;

    if (!userExists(userName, password)) {
        res.status(403).json({
            message: 'User doesnt exist in our memory'
        })
    } else {
        const token = jwt.sign({ username: userName }, jwtPass);
        res.json({
            token
        })
    }
})

app.listen(3000);