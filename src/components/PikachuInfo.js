import React, { useEffect, useState } from  'react';

const PikachuInfo = () => {
    const [pikachu, setPikachu] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((res) => res.json())
            .then((data) => {
                setPikachu(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Błąd przy pobieranu danych o Pikachu:', err);
                setLoading(false);
            })
    }, []);

    return  (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <h2>Dane o Pikachu</h2>
            {loading ?  (
                <p>Ładowanie...</p>
            ) : pikachu ?  (
                <div>
                    <h3>{pikachu.name.charAt(0).toUpperCase() +
                        pikachu.name.slice(1)}</h3>
                    <img src={pikachu.sprites.front_default} alt="Pikachu"
                    />
                    <p>
                        Typy: {pikachu.types.map((t) =>
                        t.type.name).join(', ')}
                    </p>
                    <p>Wzrost: {pikachu.height}</p>
                    <p>Waga: {pikachu.weight}</p>
                </div>
            ) : (
                <p>Nie udało się załadować danych.</p>
            )}
        </div>
    );
};
export default PikachuInfo; 