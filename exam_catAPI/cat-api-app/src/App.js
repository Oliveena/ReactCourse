// I need to wrap named imports
import React from 'react';
import { BreedProvider } from './contexts/BreedContext';
import { CatImageProvider } from './contexts/CatImageContext';
import BreedDropdown from './components/BreedDropdown';
import CatImages from './components/CatImages';
import './App.css';

function App() {
  return (
    <BreedProvider>
      <CatImageProvider>
        <div className="App">
          <header className="App-header">
            <h1>Ana's Cat API</h1>
            <p>Welcome! Want to see some cats?</p>
            <BreedDropdown />
            <CatImages />
          </header>
        </div>
      </CatImageProvider>
    </BreedProvider>
  );
}

export default App;