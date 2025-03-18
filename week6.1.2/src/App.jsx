import { useState } from 'react'
import './App.css'
import Todo from './compo/Todo'
import Wrapper from './compo/Wrapper'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([
    {
      title: 'go to GYM',
      description: '7-8PM daily',
      id: 1
    },
    {
      title: 'go to shop',
      description: '8-9PM daily',
      id: 2
    },
    {
      title: 'meet friends',
      description: '9PM daily',
      id: 3
    },
  ])
  function addTodo() {
    setTodos([...todos, { title, description, id: todos.length + 1 }])
  }
  return (
    <div>
      <input type="text" placeholder='Title' onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder='Description' onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTodo}>add todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
      <br />
      <br />
      <br />
      <Wrapper>
        Hi there!
      </Wrapper>
    </div>
  )
}

export default App
