const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Wreck7:Anuram7@cluster0.zsutz.mongodb.net/cards');

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    socials: [String]
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}