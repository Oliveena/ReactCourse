import CurrencyCalculator from './components/CurrencyCalculator';
import CorrectedCurrencyConverter from './components/CorrectedCurrencyConverter';
import './App.css';

function App() {
  return (
    <div>
      <h1>Ana's Currency Calculator</h1>
      <CurrencyCalculator />
      <p>Here is a corrected currency converter</p>
      <CorrectedCurrencyConverter />
    </div>
  );
}

export default App;


