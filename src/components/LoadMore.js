import React, { useState } from 'react';
import GameList from './GameList';

const extraGames = [
    { id: 4, title: 'Elden Ring', genre: 'RPG'},
    { id: 5, title: 'Horizon Zero Dawn', genre: 'Action RPG'}
];

const LoadMore = () => {
    const [loaded, setLoaded] = useState(false);
    const loadMoreGames = () => { setLoaded(!loaded); };
    return (
        <div>
            <button onClick={loadMoreGames}>
                {loaded ? 'Hide' : 'LoadMore'}
            </button>
            {loaded ? <GameList gamesData={extraGames}
            additionalMessage={'- even more games!'} /> : '' }
        </div>
    );
};

export default LoadMore;