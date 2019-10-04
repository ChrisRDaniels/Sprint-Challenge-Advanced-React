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
     <Players />
    </div>
  );
}

export default App;