const express = require('express');
const app = express();
import { addTodo, completeTodo } from './types';

app.use(express.json());

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (e) {
        res.status(400).json(e.errors);
    }
};


app.post('/todo', validate(addTodo), function (req, res) {

})
app.get('/todos', function (req, res) {

})
app.put('/completed', validate(completeTodo), function (req, res) {

})

app.listen(3001)