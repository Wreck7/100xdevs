const express = require('express');
const User = require('../db/index').User
const Course = require('../db/index').Course
const userMiddleware = require('../middlewares/user');
const router = express.Router();
const app = express();
app.use(express.json());

router.post('/signup', async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    await User.create({
        username,
        password
    })
    res.json({
        message: 'user created successfully'
    })
})
router.get('/courses', async function (req, res) {
    const response = await Course.find({});
    res.json({ courses: response });
})
router.post('/courses/:courseId', userMiddleware, async function (req, res) {
    const courseId = req.params.courseId
    const username = req.headers.username
    try {
        await User.updateOne(
            { username: username },
            { $push: { purchasedCourses: courseId } }
        );
        res.json({ message: 'successfully purchased a course' })
    } catch (e) {
        console.log(e)
    }
})
router.get('/purchasedCourses', userMiddleware, async function(req, res){
    const username = req.headers.username
    const user = await User.findOne({username: username})
    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
})

module.exports = router;