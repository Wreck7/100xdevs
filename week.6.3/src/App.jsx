import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0 + 1)
  useEffect(() => {
    setTimeout(() => {
      setCount(count);
    }, 1000);
  }, [])
  
  return (
    <div>
      {count}
    </div>
  )
}

export default App
