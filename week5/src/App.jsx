import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button count={count} setCount={setCount} />
    </>
  )
}

export default App
