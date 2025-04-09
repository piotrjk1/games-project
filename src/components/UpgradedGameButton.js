import React, { useState } from 'react';
import UpgradedButton from "./UpgradedButton";
const UpgradedGameButton = () => {
    const [score, setScore] = useState(0);
// Funkcja, która zwiększa wynik o 1 
    const increaseScore = () => {
        if (score < 10) {
            setScore(score + 1);
        }
    };
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Gra - Kliknij przycisk!</h1>
            <h2>Wynik: {score}</h2>
            <UpgradedButton
                onClick={increaseScore}
                children={score < 10 ? 'Kliknij, aby zdobyć punkt' :
                    'Zakończono'}
                isGameOver={score >= 10}
            >
            </UpgradedButton>
            {score >= 10 && <h2>Gra zakończona! Gratulacje!</h2>}
        </div>
    );
};
export default UpgradedGameButton; 