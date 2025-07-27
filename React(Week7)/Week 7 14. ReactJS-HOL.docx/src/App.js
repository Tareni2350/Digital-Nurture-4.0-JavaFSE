import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function DisplayTheme() {
  const theme = useContext(ThemeContext);
  return <h1>The current theme is {theme}</h1>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <DisplayTheme />
    </ThemeContext.Provider>
  );
}

export default App;