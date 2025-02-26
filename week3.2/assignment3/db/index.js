const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Wreck7:Anuram7@cluster0.zsutz.mongodb.net/assign3?retryWrites=true&w=majority&appName=Cluster0");

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
})
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
})

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {Admin, User, Course}