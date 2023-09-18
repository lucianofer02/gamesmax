import React from 'react'
import './gamecard.css'

const Gamecard = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
        <div className='botones'>
            <button className='button'>Comprar</button>
            <button className='button'>Info</button>
        </div>
    </div> 
    )
}

export default Gamecard