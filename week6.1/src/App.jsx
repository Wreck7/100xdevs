import { useState } from 'react'
import './App.css'
import Header from './compo/Header'

function App() {
  const [title, setTitle] = useState('karthik')
  function updateTitle() {
    setTitle(Math.random());
  }
  return (
    <div>
    <button onClick={updateTitle}>update 1st title</button>
      <Header title={title}/>
      <Header title="karthik"/>
      <Header title="karthik"/>
      <Header title="karthik"/>
      <Header title="karthik"/>
      <Header title="karthik"/>
      <Header title="karthik"/>
    </div>
  )
}

export default App
