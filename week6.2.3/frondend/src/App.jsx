// import { useState, useEffect } from 'react'
// import axios from 'axios'
import useTodos from './custom/RenderTodos'
import './App.css'

function App() {
  const todos = useTodos();
  // const [todos, setTodos] = useState(0)

  // useEffect(() => {
  //   axios.get('http://localhost:3000/todos')
  //     .then(res => {
  //       setTodos(res.data.todos)
  //     })
  // }, [])
  if (!Array.isArray(todos)) {
    return <div>Error: Todos is not an array</div>;
}
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
        </div>
      ))}
    </div>
  )
}

export default App
