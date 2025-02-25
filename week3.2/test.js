const mongoose = require('mongoose');
require('dotenv').config();
const dbURL = process.env.MONGO_DB_test;
mongoose.connect(dbURL);

const testUser = mongoose.model('testUser', {
    name: String,
    username: String,
    password: String
})
const testEx = new testUser(
    {
        userName: 'vishwa07@gmail.com',
        password: 'vishwa@123',
        name: 'vishwa'
    }
)
testEx.save();