import { useState } from 'react'
import './App.css'
import Gamecard from './assets/components/GameCard/gamecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='game-card'>
      <Gamecard nombre="The Last of Us" precio="50"/>
      <Gamecard nombre="Red Dead Redemption 2" precio="60"/>
      <Gamecard nombre="Red Dead Redemption 2" precio="60"/>
      <Gamecard nombre="Red Dead Redemption 2" precio="60"/>
      <Gamecard nombre="Red Dead Redemption 2" precio="60"/>
      
    </div>

    </>
  )
}

export default App
