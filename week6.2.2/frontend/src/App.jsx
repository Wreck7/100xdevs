import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState(1)
  const [finalVal, setFinalVal] = useState(0)
  useEffect(() => {
    let count = 0;
  for (let i = 1; i <= input; i++) {
    count = count + i; 
  }
  setFinalVal(count);
  }, [input])

  return (
    <div>
      <input type="Number" onChange={(e) => setInput(e.target.value)} value={input} />
      <div>sum is {finalVal}</div>
      <button onClick={() => setCounter(counter + 1)}>counter({counter})</button>
    </div>
  )
}

export default App
