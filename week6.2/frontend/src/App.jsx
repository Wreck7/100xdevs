import './App.css'
import Todo from './compo/Todo'
import { useState } from 'react'

function App() {
  const [id, setId] = useState(1)
  return (
    <div>
      <button onClick={()=> setId(1)}>1</button>
      <button onClick={()=> setId(2)}>2</button>
      <button onClick={()=> setId(3)}>3</button>
      <button onClick={()=> setId(4)}>4</button>
      <button onClick={()=> setId(5)}>5</button>
      <Todo id={id} />
    </div>
  )
}

export default App
