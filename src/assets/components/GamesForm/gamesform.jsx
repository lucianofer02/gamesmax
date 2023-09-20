import { useState } from 'react'
import React from 'react';
import './gamesform.css';

const Gamesform = ({onSaveGame}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true);

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

    const ResetImputHandler = () => {
        setTitle("");
        setPrice("");
    }

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

  return (
    <div>
        <button onClick={toggleCollapse} className='form-btn'>
            {isCollapsed ? 'Mostrar Formulario' : 'Ocultar Formulario'}
        </button>
        {!isCollapsed && (
            <div className='new-game-controls'>
            <h2>Creación de Videojuego</h2>
            <div className='new-game-control'>
                <label>Título: </label>
                <input
                 onChange={changeTitleHandler}
                 type="text"
                 className='input-control'
                 value={title} />
            </div>
            <div className='new-game-control'>
                <label>Precio:</label>
                <input
                 onChange={changePriceHandler}
                 type="text"
                 className='input-control'
                 value={price}
                  />
            </div>
            <div className='new-game-actions'>
                <button onClick={ResetImputHandler} className='form-btn'>Cancelar</button>
                <button onClick={addGameHandler} className='form-btn'>Agregar</button>
            </div>
        </div>
        )}
    </div>
  );
};
export default Gamesform