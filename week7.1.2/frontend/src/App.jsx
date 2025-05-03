
import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './Context'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return (
    <div>
      {/* {console.log(count)} */}
      <CountRender />
      <Button setCount={setCount} />
    </div>
  )
}

function CountRender() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App
