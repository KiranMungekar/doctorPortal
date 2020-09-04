import React from 'react';
import logo from './logo.svg';
import './App.css';

import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Doctor Portal
      </header>
      <div className="App-container">
            <Signup/>
      </div>
        
    </div>
  );
}

export default App;
