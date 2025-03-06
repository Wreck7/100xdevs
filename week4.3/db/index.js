const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Wreck7:Anuram7@cluster0.zsutz.mongodb.net/retest')
const Schema = mongoose.Schema;
const Model = mongoose.model

const AdminSchema = new Schema({
    username: String,
    password: String
})
const UserSchema = new Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
})
const CourseSchema = new Schema({
    title: String,
    description: String,
    price: Number
})

const Admin = Model('Admin', AdminSchema)
const User = Model('User', UserSchema)
const Course = Model('Course', CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}