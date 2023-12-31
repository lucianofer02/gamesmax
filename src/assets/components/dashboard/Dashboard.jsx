import React, { useCallback, useContext, useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import { Col,  Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NewGame from '../newGame/NewGame';
import { AuthenticationContext } from '../../services/authenticationContext/autentication.context';
import Games from '../games/Games';
import GameFilter from '../gameFilter/GameFilter';
import Products from '../Products/Products';


const Dashboard = () => {
    const [genreSelected, setGenreSelected] = useState("");
    const [games, setGames] = useState([]);
    const [gamesFiltered, setGamesFiltered] = useState([]);
    
    // const { handleLogout, user } = useContext(AuthenticationContext)
    // const username = user.email.split("@"[0]);

    useEffect(() => {
        fetch("https://gamesmax.onrender.com/games", {
          headers: {
            accept: "application/json",
          },
    })
      .then((response) => response.json())
      .then((gameData) => {
        console.log(gameData);
        setGames(gameData);
        setGamesFiltered(gameData);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    const navigate = useNavigate();

    const appGameHandler = useCallback(
        (game) => {
            setGames((prevGames) => [game, ...prevGames]);
            setGamesFiltered((prevGames) => [game, ...prevGames]);

            const newGameId = games[games.length - 1].id + 1;

            fetch("https://gamesmax.onrender.com/games", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                
        body: JSON.stringify({
          id: newGameId,
          title: game.title,
          genre: game.genre,
          price: game.price,
        }),
      })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("The response had some erroes")
        }
      })
      .then(() => {
        const newGameArray = [{ ...game, id: newGameId }, ...games];
        setGames(newGameArray);
        setGamesFiltered(newGameArray);
      })
        }, [games])

    const appGenreHandler = (genre) => {
        setGenreSelected(genre);
        const gamesFiltered = games.filter(
          (games) => games.genre === genre
          );
        setGamesFiltered(gamesFiltered);
    }

    // const handleLogoutInDashboard = () => {
    //     handleLogout();
    //     navigate("/login")
    // }
  return (
    <>
        <Row>
            <Col>
                <Navbar />
                <h1>GamesMax</h1>
            </Col>
            <Col>
            {/* <button onClick={handleLogoutInDashboard}>Cerrar Sesion</button> */}
            </Col>
        </Row>
        <br />
        <NewGame onGameSaved={appGameHandler}/>
        <GameFilter genreSelected={genreSelected} onGenreChange={appGenreHandler}/>
        <Games genreSelected={genreSelected} games={gamesFiltered}/>
    </>
  )
}

export default Dashboard