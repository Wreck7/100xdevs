const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

async function findUser(username) {
    try {
        const user = await User.findOne({ username });
        return user ? true : false;
    } catch (err) {
        console.error('Error finding user:', err);
        return false;
    }
}
async function findCourse(courseId) {
    try {
        const course = await Course.findOne({ courseId });
        return course ? true : false;
    } catch (err) {
        console.error('Error finding user:', err);
        return false;
    }
}

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;
    const checkUser = findUser(username);
    if (!checkUser) {
        res.status(400).json({ message: 'User already exists' });
    } else {
        await User.create({ username: username, password: password });
        res.status(201).json({ message: 'User created successfully' });
    }
});

router.get('/courses',userMiddleware ,async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find();
    res.status(200).json({ Courses: response });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    const username = req.headers.username;
    const checkCourse = findCourse(courseId);
    if (!checkCourse) {
        res.status(404).json({ message: 'Course does not exist' });
    } else {
        await User.updateOne({ username: username }, { $push: { purchasedCourses: courseId } })
        res.status(200).json({ message: 'Course purchased successfully' })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router