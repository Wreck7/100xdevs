const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Wreck7:Anuram7@cluster0.zsutz.mongodb.net/todo-app');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}
