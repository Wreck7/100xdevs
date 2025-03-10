const express = require('express');
const app = express();
import { addTodo, updateTodo } from './types';

app.use(express.json());

app.post('/todo', function (req, res) {
    const addTodoBody = req.body
    const parseBody = addTodo.safeParse(addTodoBody)
    if(!parseBody.success){
        res.status(411).json({
            message: 'You sent the wrong inputs'
        })
    }else{
        //put in mongoDB
    }
})
app.get('/todos', function (req, res) {
    
})
app.put('/completed', function (req, res) {
    const updateTodoBody = req.body
    const parseBody = updateTodo.safeParse(updateTodoBody)
    if(!parseBody.success){
        res.status(411).json({
            message: 'You sent the wrong inputs'
        })
    }else{
        //put in mongoDB
    }

})

app.listen(3001)