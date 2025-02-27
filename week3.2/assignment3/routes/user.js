const { Router } = require("express");
const { User, Course } = require("../db/index");
const userMiddleware = require("../middlewares/user");
const express = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const jwtPass = "secret";

const app = express();
app.use(express.json());

async function findUser(username) {
    try {
        const user = await User.findOne({ username });
        return user ? true : false;
    } catch (e) {
        console.error('Error finding user:', err);
        return false;
    }
}

router.post('/signup', async function (req, res) {
    // Implement admin signup logic
    const { username, password } = req.body;
    const checkUser = await findUser(username);
    if (!checkUser) {
        await User.create({ username: username, password: password });
        res.json({ message: 'user created successfully' });
    } else {
        res.status(400).json({ message: 'user already exists' });
    }
})

router.post('/signin', async function (req, res) {
    const { username, password } = req.body;
    const checkUser = await findUser(username);
    if (!checkUser) {
        res.status(400).json({ message: 'user does not exist please sign up first!' });
    } else {
        const token = jwt.sign({ username: username, password: password }, jwtPass)
        // const admin = await Admin.updateOne({username: username}, {token: token});
        res.json({ message: 'user signed in successfully', token: token });
    }
})

router.get('/courses', userMiddleware, async function (req, res) {
    const response = await Course.find();
    res.json({ courses: response });
})

router.post('/courses/:id', userMiddleware, async function (req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;
    const secWord = token.split(" ");
    const jwtToken = secWord[1]
    const decoded = jwt.verify(jwtToken, jwtPass);
    const checkCourse = await Course.findOne({_id: id});
    if (!checkCourse) {
        res.status(404).json({ message: 'Course does not exist' });
    } else {
        await User.updateOne({ username: decoded.username }, { $addToSet: { purchasedCourses: id } })
        res.status(200).json({ message: 'Course purchased successfully' })
    }
})

router.get('/purchasedCourses', userMiddleware, async function(req, res){
    const token = req.headers.authorization;
    const secWord = token.split(" ");
    const jwtToken = secWord[1]
    const decoded = jwt.verify(jwtToken, jwtPass);
    const user = await User.findOne({ username: decoded.username });
    const courses = await Course.find({_id: {$in: user.purchasedCourses}});
    res.json({courses: courses});
})

module.exports = router;