import React from 'react';
import GameCard from './GameCard';

const GameList = ({ gamesData }) => {
    return (
        <div>
            <h2>Game List</h2>
            <ul>
                {gamesData.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </ul>
        </div>
    );
};

export default GameList;