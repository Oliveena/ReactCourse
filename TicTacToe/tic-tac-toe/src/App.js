
import './App.css';
import Board from './components/Board';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Tic-Tac-Toe Game</h2>
        <p>Tutorial from https://react.dev/learn/tutorial-tic-tac-toe</p>
        <Board />
      </header>
    </div>
  );
}

export default App;
