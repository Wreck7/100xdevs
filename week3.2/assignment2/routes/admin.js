const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db");
const express = require('express');
const router = Router();
const app = express();
app.use(express.json());

async function findUser(username) {
    try {
        const admin = await Admin.findOne({ username });
        return admin ? true : false;
    } catch (err) {
        console.error('Error finding user:', err);
        return false;
    }
}

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username, password} = req.body;
    const checkAdmin = findUser(username);
    if (!checkAdmin) {
        res.status(400).json({message: 'Admin already exists'});
    }else{
        await Admin.create({username, password});
        res.status(201).json({message: 'Admin created successfully'})
    }
});

router.post('/courses', adminMiddleware, async function(req, res){
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const newCourse = await Course.create({title, price, description})
    res.status(201).json({message: 'Course added successfully', courseId: newCourse._id});
})



router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find();
    res.status(200).json({courses: response});
});

module.exports = router;