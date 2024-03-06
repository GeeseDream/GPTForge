
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeSwitchButton.css'; // Ensure to import CSS file

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="theme-switch-button" onClick={toggleTheme}>
      🌓
    </button>
  );
};

export default ThemeSwitchButton;
