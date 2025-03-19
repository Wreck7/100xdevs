const { Router } = require("express");
const { Admin, Course } = require("../db/index");
const adminMiddleware = require("../middlewares/admin");
const express = require('express');
const router = Router();

const jwt = require('jsonwebtoken');
const jwtPass = "secret";

const app = express();
app.use(express.json());

async function findAdmin(username) {
    try {
        const admin = await Admin.findOne({ username });
        return admin ? true : false;
    } catch (e) {
        console.error('Error finding user:', err);
        return false;
    }
}

router.post('/signup', async function (req, res) {
    // Implement admin signup logic
    const { username, password } = req.body;
    const checkAdmin = await findAdmin(username);
    if (!checkAdmin) {
        await Admin.create({ username: username, password: password });
        res.json({ message: 'admin created successfully' });
    } else {
        res.status(400).json({ message: 'admin already exists' });
    }
})

router.post('/signin', async function (req, res) {
    const { username, password } = req.body;
    const checkAdmin = await findAdmin(username);
    if (!checkAdmin) {
        res.status(400).json({ message: 'admin does not exist please sign up first!' });
    } else {
        const token = jwt.sign({ username: username, password: password }, jwtPass)
        res.json({ message: 'admin signed in successfully', token: token });
    }
})

router.post('/courses', adminMiddleware, async function (req, res) {
    const { title, description, price } = req.body;
    const newCourse = await Course.create({
        title: title,
        description: description,
        price: price
    })
    res.json({ message: 'course added successfully', courseId: newCourse._id });
})

router.get('/courses', adminMiddleware, async function (req, res) {
    const response = await Course.find();
    res.json({ courses: response });
})

module.exports = router;