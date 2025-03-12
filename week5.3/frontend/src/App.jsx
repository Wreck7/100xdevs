import './App.css'
import Card from './compo/card'
import { useState } from 'react'
function App() {
  const [cards, setcards] = useState([
    {
      name: "Vishwa Govula",
      desc: "Budding full-stack dev",
      interests: ["JavaScript", "HTML", "CSS", "TailwindCSS", "React JS", "Node JS", "Express JS", "MongoDB"],
      socials: ["Twitter", "LinkedIN", "Instagram", "Peerlist"]
    }
  ])
  return (
    <div className='main'>
      <Card cards={cards} />
    </div>
  )
}

export default App
