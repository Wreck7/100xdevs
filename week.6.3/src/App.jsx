import { useState, useEffect, useMemo, useCallback } from 'react'
import './App.css'
import { CallComp } from './compo/CallComp'

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

  const exchanges = useCallback(() => {
    console.log("calculating")
    return exchange1.returns + exchange2.returns
  }, [exchange1, exchange2])


  return (
    <div>
      <CallComp exchanges={exchanges}/>
    </div>
  )
}

export default App