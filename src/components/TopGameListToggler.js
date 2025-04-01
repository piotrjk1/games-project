import React, { useState } from 'react';
import topBoardGamesData from "../BoardGamesDataTop10";
import topGamesData from "../GamesDataTop10";
import GameList from "./GameList";
const TopGamesListToggler = () => {
    const [showBoardGames, setShowBoardGames] = useState(false);
    const toggleList = () => {
        setShowBoardGames(!showBoardGames);
    };
    return (
        <div className="topgames">
            <button onClick={toggleList} className="toggle-button">
                {showBoardGames ? 'Show Computer Games' : 'Show Board Games'}
            </button>
                {showBoardGames ? <GameList gamesData={topBoardGamesData} additionalMessage={' - top 10 Board Games'} /> :
            <GameList gamesData={topGamesData} additionalMessage={' - top 10 Computer Games'} />}
        </div>
    );
}
export default TopGamesListToggler;