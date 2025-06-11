import CatImages from './components/CatImages';
import BreedDropdown from './components/BreedDropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={} className="App-logo" alt="logo" />*/}
        <BreedDropdown />
        <CatImages />
      </header>
    </div>
  );
}

export default App;
