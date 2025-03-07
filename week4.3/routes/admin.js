const express = require('express');
const Admin = require('../db/index').Admin
const Course = require('../db/index').Course
const adminMiddleware = require('../middlewares/admin');
const router = express.Router();
const app = express();
app.use(express.json());

router.post('/signup', async function(req, res) {
    const username = req.body.username
    const password = req.body.password
    await Admin.create({
        username,
        password
    })
    res.json({
        message: 'Admin created successfully'
    })
})
router.post('/courses', adminMiddleware, async function(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const newCourse = await Course.create({title, description, price})
    res.json({ message: 'course added successfully', courseId: newCourse._id})
})
router.get('/courses', adminMiddleware, async function(req, res) {
    const response = await Course.find({});
    res.json({courses: response});
})

module.exports = router;