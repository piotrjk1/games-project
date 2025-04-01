import React, { useState } from 'react';
import GameList from "./GameList";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);

    };
    return (
        <button onClick={toggleTheme}>
            {darkMode ? 'Light mode' : 'Dark mode'};
        </button>

    )

}

export default ThemeToggle;