import './App.css';
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/images/my-photo.jpg"} className="Random picture from a past project" alt="picture" />
     

    <Greeting />
    <Greeting2 /> 

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
