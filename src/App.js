import React from 'react';
import { ReactComponent as Logo } from './assets/img/gridwhite.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="brand">
          <Logo className="logo" />
          <h2 className="title"> Grid Monitor</h2>
        </div>
        <span>Address: http://35.178.211.39:8080/</span>
      </header>
    </div>
  );
}

export default App;
