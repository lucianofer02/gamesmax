import React, { useState } from 'react'
import GameCard from '../gameCard/GameCard'
import './GameItem.css'

const GameItem = ({title, price, genre}) => {
  return (
    <GameCard clasName="game-item-container">
        <h1>{title}</h1>
        <h3>{genre}</h3>
        <h3>${price}</h3>
    </GameCard>
  );
};

export default GameItem;