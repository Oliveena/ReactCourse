import CatImages from './components/CatImages';
import BreedDropdown from './components/BreedDropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={} className="App-logo" alt="logo" />*/}
        <h1>Ana's Cat API</h1>
        <p>Welcome! Want to see some cats?</p>
        <BreedDropdown />
        <CatImages />
      </header>
    </div>
  );
}

export default App;
