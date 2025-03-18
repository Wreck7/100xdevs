import { useState } from 'react'
import './App.css'
import Header from './compo/Header'

function App() {
  const [title, setTitle] = useState('karthik')
  function updateTitle() {
    setTitle(Math.random()*100);
  }
  return (
    <div>
    <button onClick={updateTitle}>update 1st title</button>
      <Header title={title}/>
      <Header title="sowmya"/>
      <Header title="sowmya"/>
      <Header title="sowmya"/>
      <Header title="sowmya"/>
      <Header title="sowmya"/>
      <Header title="sowmya"/>
    </div>
  )
}

export default App
