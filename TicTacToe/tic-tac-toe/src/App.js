import logo from './logo.svg';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board />
      </header>
    </div>
  );
}

export default App;
