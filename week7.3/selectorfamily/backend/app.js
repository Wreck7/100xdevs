const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
app.use(cors());

todos = [
  {
    id: "1",
    title: "go gym",
    description: '7pm everyday'
  },
  {
    id: "2",
    title: "go school",
    description: '7am everyday'
  },
  {
    id: "3",
    title: "eat breakfast",
    description: '8am everyday'
  },
  {
    id: "4",
    title: "learn skills",
    description: 'learn something new everyday'
  },
  {
    id: "5",
    title: "play cricket",
    description: '5pm everyday'
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todo', (req, res)=> {
  const {id} = req.query;
  selTodo = todos.find(t => t.id === id)
    res.json({
        todo: selTodo
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})