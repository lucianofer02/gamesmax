import React, { memo } from 'react'
import Gamesform from '../GamesForm/GamesForm'

const NewGame = memo(({onGameSaved}) => {
    const saveGameHandler = (game) => {
        onGameSaved(game);
    }
  return (
    <div className='new-game'>
        <Gamesform onSaveGame={saveGameHandler}/>
    </div>
  )
});

export default NewGame