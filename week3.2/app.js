const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPass = "123456";
const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.MONGO-DB-userAPP
app.use(express.json());
mongoose.connect(dbURL);

const user = mongoose.model('users', {
    username: String,
    password: String,
    name: String
})

// const allUsers = [
//     {
//         userName: 'vishwa07@gmail.com',
//         password: 'vishwa@123',
//         name: 'vishwa'
//     },
//     {
//         userName: 'karthik@gmail.com',
//         password: 'karthik@123',
//         name: 'karthik'
//     },
//     {
//         userName: 'tejas@gmail.com',
//         password: 'tejas@123',
//         name: 'tejas'
//     },
//     {
//         userName: 'saharsh@gmail.com',
//         password: 'saharsh@123',
//         name: 'saharsh'
//     },
// ]

async function userExists(userName, password) {
    // return await user.findOne({username: userName});
    return allUsers.some(user => user.userName === userName && user.password === password);
}

async function notUserButOthers(userName) {
    return await user.find({}).filter(u => u.userName !== userName);
}

app.get('/users', function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPass);
        const userName = decoded.username;
        res.json({
            users: notUserButOthers(userName)
        })
    } catch (e) {
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

app.post('/signup', async function (req, res) {
    const { userName, password, name } = req.body;
    const userExists = await user.findOne({username: userName});
    if (userExists) {
        res.status(403).json({
            message: 'User already exists'
        })
    } else {
        const newUser = new user(
            {
                username: userName,
                password: password,
                name: name
            }
        )
        newUser.save();
        res.json({message: 'user created successfully'})
    }
})
app.listen(3000);