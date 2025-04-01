import React from 'react';
import '../styles/GameCard.css';

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <h3>{game.title}</h3>
            <p>Genre: {game.genre}</p>
        </div>
    );
};

export default GameCard;