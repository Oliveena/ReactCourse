import FruitsList from"./components/FruitsList";
import StudentList from "./components/StudentList";
import Greeting from "./components/Greeting";
import './App.css';
import Counter from "./components/Counter";
import ClickExample from "./components/ClickExample";
import ShowHide from "./components/ShowHide";

function App() {

      const students = [
      {id: 1, name: "Elena", grade: "A"}, 
      {id: 2, name: "Ali", grade: "B"}, 
      {id: 3, name: "Sara", grade: "A+"}, 
    ]

  return (
    // <div className="App">
    //   <div>
    //     FruitsList list={["Apple", "Banana","Cherry"]}
    //   </div>
    //   <br />
    //   <div>
    //     <StudentList students={students} />
    //   </div>
    // </div>
<div>
  <Greeting />
  <ClickExample />
  <ShowHide />
</div>

  );
}

export default App;


