// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect } from 'react';

// 1. Context create karo
export const ThemeContext = createContext();

// 2. Provider component banao
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. 'light' is default.
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Jab bhi theme change ho, body par data-theme attribute lagao
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
