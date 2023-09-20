import { useState } from 'react'
import './App.css'
import Gamecard from './assets/components/GameCard/gamecard'
import Gamesform from './assets/components/GamesForm/gamesform'

const App = () => {

  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame])
  }

  return (
    <>
    <div>
    <h1>GamesMax</h1>
    <Gamesform onSaveGame={addGame}/>
      {games.map((game) => (
        <div className='card'>
          <h2>{game.title}</h2>
          <h2>precio: {game.price}</h2>
          <div className='card-btns'>
            <button className='card-btn'>Comprar</button>
            <button className='card-btn'>Info</button>
          </div>
        </div>
      ))}
  </div>
  </>
  )
}

export default App
