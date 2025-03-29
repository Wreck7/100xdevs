import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [exchange, setExchange] = useState({})
  const [bank, setBank] = useState({})
  useEffect(() => {
    setTimeout(() => {
      setExchange({returns: 100});
    }, 1000);
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setBank({amount: 100});
    }, 1000);
  }, [])
  const incomeTax = (exchange.returns + bank.amount) * 0.2;
  return (
    <div>
      your tax is {incomeTax}
    </div>
  )
}

export default App
