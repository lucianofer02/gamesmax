import { memo } from 'react';
import GameItem from '../GameItem/GameItem'

const Games = memo(({games, genreSelected}) => {
    const gamesMapped = games.map((game, index) => (
        <GameItem
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
        />
    ));

  return (
    <div className='games'>
        {gamesMapped.length > 0 ? (
            gamesMapped
        ) : (
            <h3>No hay videojuegos del género {genreSelected}</h3>
        )}
    </div>
  );
});

export default Games;