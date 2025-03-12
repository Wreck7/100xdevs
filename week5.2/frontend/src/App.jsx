import { useState, useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch('http://localhost:3001/todos');
      const data = await response.json()
      setTodos(data.todos)
    }
    fetchTodos();
    // console.log(todos);
  })
  
  return (
    <div>
      <CreateTodo setTodos={setTodos} todos={todos}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
