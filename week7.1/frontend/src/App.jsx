

import './App.css'
import React, { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Dash from './compo/Dash'
// import Landing from './compo/Landing'
import Buttons from './compo/Buttons'
const Dash = React.lazy(()=> import('./compo/Dash'))
const Landing = React.lazy(()=> import('./compo/Landing'))
function App() {

  return (
    <div>
      <BrowserRouter>
      <Buttons />
        <Routes>
          <Route path="/dash" element={<Suspense fallback={"....loading"}><Dash /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"....loading"}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
