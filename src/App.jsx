import { useState } from 'react'
import '../src/App.css'
import Gamesform from './assets/components/GamesForm/gamesform'
import Navbar from './assets/components/Navbar/navbar'
import Login from './assets/components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './assets/components/Cart/Cart'

const App = () => {

  const [games, setGames] = useState([]);

  const addGame = (newGame) => {
    setGames([...games, newGame])
  }

  return (
    <>
    <div>
      <Login />
      <div className='nav'>
      <Navbar />
      </div>
    <div className='gameform'>
      <h1>GamesMax</h1>
      <Gamesform onSaveGame={addGame}/>
    </div>
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
      <div>
        <Cart/>
      </div>
  </div>
  </>
  )
}

export default App
