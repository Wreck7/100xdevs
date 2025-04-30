import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Dash } from './compo/Dash'
import { Landing } from './compo/Landing'
import Buttons from './compo/Buttons'
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
