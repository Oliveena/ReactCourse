import './App.css';
import Welcome from './components/Component2';
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";
import RandomNumberGenerator from './components/RandomNumberGenerator';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/images/my-photo.jpg"} className="Random picture from a past project" alt="picture" />
     

    <Greeting />
    <Greeting2 /> 
    <RandomNumberGenerator />
    <Welcome />

    <StudentCard name="Anastassia Tarassova" age={29} />

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}


export default App;
