import React from 'react';
import './App.css';
import Players from './components/Players'
import useDarkMode from './hooks/useDarkMode'

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
        <h3>Toggle Dark Mode</h3>
      </div>
      <h1>Women's World Cup Players</h1>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/2019_FIFA_Women%27s_World_Cup.svg/1200px-2019_FIFA_Women%27s_World_Cup.svg.png" height="250px"   alt= "world-cup-img"></img>
     <Players />
    </div>
  );
}

export default App;