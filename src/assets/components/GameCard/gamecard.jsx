import React from 'react'
import './gamecard.css'

const Gamecard = (props) => {
  return (
    <div className='card'>
        <h1>{props.nombre}</h1>
        <h3>{props.precio}</h3>
        <div className='botones'>
            <button className='button'>Comprar</button>
            <button className='info'>Info</button>
        </div>
    </div> 
    )
}

export default Gamecard