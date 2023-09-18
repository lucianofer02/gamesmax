import { Button } from 'react-bootstrap';
import { useState } from 'react'
import React from 'react';

const Gamesform = ({onSaveGame}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    }

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    }

    const addGameHandler = () => {
        const newGame = {
            title,
            price,
        };
        onSaveGame(newGame);
        setTitle("");
        setPrice("");
    }

  return (
    <div>
        <div className='new-game-controls'>
            <div className='new-game-control'>
                <label>Título</label>
                <input
                 onChange={changeTitleHandler}
                 type="text"
                 className='input-control'
                 value={title} />
            </div>
            <div className='new-game-control'>
                <label>Precio</label>
                <input
                 onChange={changePriceHandler}
                 type="text"
                 className='input-control'
                 value={price}
                  />
            </div>
        </div>
        <div className='new-game-actions'>
            <Button>Cancelar</Button>
            <Button onClick={addGameHandler}>Agregar</Button>
        </div>
    </div>
  );
};
export default Gamesform