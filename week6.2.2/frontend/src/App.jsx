import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState(1)
  let count = useMemo(() => {
    let finalVal = 0;
    for (let i = 1; i <= input; i++) {
      finalVal = finalVal + i;
    }
    return finalVal
  }, [input])

  return (
    <div>
      <input type="Number" onChange={(e) => setInput(e.target.value)} value={input} />
      <div>sum is {count}</div>
      <button onClick={() => setCounter(counter + 1)}>counter({counter})</button>
    </div>
  )
}

export default App
