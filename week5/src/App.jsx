import { useState } from 'react'
import './App.css'
// import Button from './components/Button'
import Todo from './components/Todo'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([{ title: 'todo1', description: 'thing of todo1', id: 1 }, { title: 'todo1', description: 'thing of todo1', id: 2 }, { title: 'todo1', description: 'thing of todo1', id: 3 }, { title: 'todo1', description: 'thing of todo1', id: 4 }])
  return (
    <>
      {/* <Button count={count} setCount={setCount} /> */}
      <Todo todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
