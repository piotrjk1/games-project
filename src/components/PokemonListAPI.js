import React, { useEffect, useState } from 'react';

const PokemonListAPI = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Błąd przy pobieraniu Pokemonów: ', err);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: '20px'}}>
            <h2>Lista Pokemonów</h2>
            {loading ? (
                <p>Ładowanie...</p>
            ):  (
                <ul>
                    {pokemon.map((p, index) =>  (
                        <li key={index}>{p.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PokemonListAPI;