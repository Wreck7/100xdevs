const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Wreck7:Anuram7@cluster0.zsutz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0');

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