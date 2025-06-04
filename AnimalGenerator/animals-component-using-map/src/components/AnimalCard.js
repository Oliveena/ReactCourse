import AnimalShow from "../AnimalShow";


// no logic, only infrastructure for displaying data from App.js
// I added animal.name to display, because why not
export default function AnimalCard({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((animal, index) => (
        <div className="animal-card" key={index}>
<div className="container text-center">
  <div className="row">
    <div className="col">
      <img
        src={animal.image}
        alt={animal.name}
        className="img-fluid"
        style={{ width: "15vw", maxWidth: "150px" }}
      />
       <p>{animal.name}</p>
    </div>
  </div>
</div>
         
        </div>
      ))}
    </div>
  );
}
