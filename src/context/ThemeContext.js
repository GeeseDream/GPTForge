import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Get the user's theme preference from local storage, if it exists
    const storedTheme = localStorage.getItem('theme');
    // Set the theme to the stored theme or to the system preference if no stored theme exists
    const preferredTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
  }, []);

  // Save the user's theme preference to local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    // Update the body's data-theme attribute to match the current theme
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, useTheme, ThemeProvider };
