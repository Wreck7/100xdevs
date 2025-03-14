import './App.css'
import Card from './compo/card'
import { useState, useEffect } from 'react'
function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function getCards() {
      try {
        const response = await fetch('http://localhost:3002/cards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setCards(result.cards);
      } catch (error) {
        console.error('Failed to fetch cards:', error);
      }
    }

    getCards();
  }, []);
  return (
    <div className='main'>
      <Card cards={cards} />
    </div>
  )
}

export default App
