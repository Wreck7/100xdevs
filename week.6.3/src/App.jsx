import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  const [exchange1, setExchange1] = useState({})
  const [exchange2, setExchange2] = useState({})
  const [bank, setBank] = useState({})

  useEffect(() => {
    setExchange1({ returns: 100 });
  }, [])

  useEffect(() => {
    setExchange2({ returns: 100 });
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBank({ amount: 100 });
    }, 1000);
  }, [])

  const exchanges = useMemo(() => {
    console.log("calculating")
    return exchange1.returns + exchange2.returns
  }, [exchange1, exchange2])

  const incomeTax = (exchanges + bank.amount) * 0.2;

  return (
    <div>
      your income tax is {incomeTax}
    </div>
  )
}

export default App