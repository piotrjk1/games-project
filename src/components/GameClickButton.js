import React, { useState } from 'react';
import GameButton from './GameButton';

const GameClickButton = () => {
    const [score, setScore] = useState(0);

    // funkcja która zwiększa wyniok o 1
    const increaseScore = () => {
        setScore(score + 1);
    };

    return (
        <div style={{textAlign: 'center', padding: '50px' }}>
            <h1>Gra - kliknij przycisk !</h1>
            <h2>Wynik: {score}</h2>
            <GameButton onClick={increaseScore}>Kliknij, aby zdobyć punkt</GameButton>
        </div>
    );
};

export default GameClickButton;