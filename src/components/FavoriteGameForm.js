import React, { useState } from 'react';
import '../styles/FavoriteGameForm.css';

const FavoriteGameForm = () => {
    const [favoriteGame, setFavoriteGame] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!favoriteGame.trim()) return;

        setMessage(`Świetny wybór! ${favoriteGame}`);
        setFavoriteGame('');
    };

    return (
        <div className="favorite-game-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={favoriteGame}
                    onChange={(e) => setFavoriteGame(e.target.value)}
                    placeholder="Podaj swoją ulubioną grę" />
                <button type="submit">Potwierdź</button>
            </form>
            {message && <p className="game-message">{message}</p>}
        </div>
    )
}

export default FavoriteGameForm;