const express = require('express');
const { addTodo, updateTodo } = require('./types')
const cors = require('cors')
const { Todo } = require('./db')
// import { addTodo, updateTodo } from './types';
// import { Todo } from './db';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/todo', async function (req, res) {
    const addTodoBody = req.body
    const parseBody = addTodo.safeParse(addTodoBody)
    if (!parseBody.success) {
        res.status(411).json({
            message: 'You sent the wrong inputs'
        })
    } else {
        //put in mongoDB
        await Todo.create({
            title: addTodoBody.title,
            description: addTodoBody.description,
            completed: false
        })
        res.json({
            message: 'Todo added successfully'
        })
    }
})
app.get('/todos', async function (req, res) {
    const response = await Todo.find();
    res.json({
        response
    })
})
app.put('/completed', async function (req, res) {
    const updateTodoBody = req.body
    const parseBody = updateTodo.safeParse(updateTodoBody)
    if (!parseBody.success) {
        res.status(411).json({
            message: 'You sent the wrong inputs'
        })
    } else {
        //put in mongoDB
        await Todo.updateOne({
            _id: req.body.id,
        }, {
            completed: true
        })
        res.json({
            message: 'Todo marked as done!'
        })
    }

})

app.listen(3001)