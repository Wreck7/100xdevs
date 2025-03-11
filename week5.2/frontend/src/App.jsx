import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo />
      <Todos todos={[
        {title: 'go to gym',
          description: 'now fast',
          completed: false
        },
        {title: 'go to gym',
          description: 'now fast',
          completed: false
        },
        {title: 'go to gym',
          description: 'now fast',
          completed: true
        },
      ]}/>
    </div>
  )
}

export default App
