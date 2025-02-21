const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [];
const dataFilePath = path.join(__dirname, 'todos.json');

// Load todos from file if it exists
if (fs.existsSync(dataFilePath)) {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  todos = JSON.parse(data);
}

// Save todos to file
const saveTodosToFile = () => {
  fs.writeFileSync(dataFilePath, JSON.stringify(todos, null, 2));
};

// Generate unique ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// GET /todos - Retrieve all todo items
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// GET /todos/:id - Retrieve a specific todo item by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.status(200).json(todo);
});

// POST /todos - Create a new todo item
app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  const newTodo = { id: generateId(), title, description };
  todos.push(newTodo);
  saveTodosToFile();
  res.status(201).json({ id: newTodo.id });
});

// PUT /todos/:id - Update an existing todo item by ID
app.put('/todos/:id', (req, res) => {
  const { title, description } = req.body;
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.title = title || todo.title;
  todo.description = description || todo.description;
  saveTodosToFile();
  res.status(200).json(todo);
});

// DELETE /todos/:id - Delete a todo item by ID
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  saveTodosToFile();
  res.status(200).json({ message: 'Todo deleted' });
});
// Catch-all route for undefined routes
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });