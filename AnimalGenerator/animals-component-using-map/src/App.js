import "./App.css";
import { useState } from "react";
import AnimalCard from "./components/AnimalCard";
import Button from "./components/Button";
// importing all the animals, I wonder if this can be reduced in length
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";

function App() {
  // defining images
  const animalImages = { bird, cat, dog, gator, horse };

  // defining a map for images and their names
  const animals = Object.keys(animalImages).map(name => ({
    name,
    image: animalImages[name],
  }));

  // sdefining useState (nothing displays at first)
  const [animalList, setAnimalList] = useState([]);

  // on button click
  const handleClick = () => {
    // choose a random number and assign it to element index
    const randomIndex = Math.floor(Math.random() * animals.length);
    // pick the animal as per their index
    const newAnimal = animals[randomIndex];
    // add them into a list of displayed animals
    setAnimalList([...animalList, newAnimal]);
  };

  // return the UI elements 
return (
    <div className="app">
      <Button onClick={handleClick} />
      <div className="animal-list">
        {animalList.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default App;
