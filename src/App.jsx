import { useState } from 'react'
import './App.css'
import Gamecard from './assets/components/GameCard/gamecard'
import Gamesform from './assets/components/GamesForm/gamesform'

const GAMES = [{title: "The Last of us", price: 16 }]

const App = () => {

  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame])
  }

  return (
    <>
    <h1>GamesMax</h1>
    <Gamesform onSaveGame={addGame}/>
    <div className='card'>
    {games.map((game, index) => (
      <div key={index} className='card'>
        <h2>{game.title}</h2>
        <h2>precio: {game.price}</h2>
      </div>
    ))}
  </div>
  </>
  )
}

export default App
