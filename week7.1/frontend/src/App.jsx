import './App.css'
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Dash from './compo/Dash'
import Landing from './compo/Landing'
import Buttons from './compo/Buttons'
const Dash = React.lazy(()=> import('./compo/Dash'))
function App() {

  return (
    <div>
      <BrowserRouter>
      <Buttons />
        <Routes>
          <Route path="/dash" element={<Dash />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
