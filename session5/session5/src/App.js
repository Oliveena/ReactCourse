/*INCORRECT AND UNIFINISHED*/ 

import MountExample from './components/MountExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => setShow(!show)}>Show/Hide</button>
        {show ? "hide" : "show"} the example 
        {show && <MountExample />}
       
      </header>
    </div>
  );
}

export default App;
