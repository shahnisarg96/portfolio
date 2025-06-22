// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === 'dark'}
            />
            <FaSun className="swap-on h-6 w-6 fill-current" />
            <FaMoon className="swap-off h-6 w-6 fill-current" />
        </label>
    );
};

export default ThemeToggle;

