import React, { useState } from 'react';
import GameButton from './GameButton';
import GameBackground from './GameBackground';
const GameMainSection = () => {
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState('easy'); // Domyślnypoziom trudności
// Funkcja, która zwiększa wynik o 1
    const increaseScore = () => {
        setScore(score + 1);
    };
// Funkcja zmieniająca poziom trudności
    const changeDifficulty = () => {
        setDifficulty(difficulty === 'easy' ? 'hard' : 'easy');
    };
    return (
        <GameBackground difficulty={difficulty}>
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>Gra - Zmień poziom trudności!</h1>
                <h2>Wynik: {score}</h2>
                <GameButton onClick={increaseScore}>Kliknij, aby zdobyć
                    punkt</GameButton>
                <GameButton onClick={changeDifficulty}>Zmień poziom
                    trudności</GameButton>
            </div>
        </GameBackground>
    );
};
export default GameMainSection;