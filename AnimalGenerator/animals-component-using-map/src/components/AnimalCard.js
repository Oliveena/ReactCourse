import AnimalShow from "../AnimalShow";


// no logic, only infrastructure for displaying data from App.js
// I added animal.name to display, because why not
import { useState } from "react";

// heart is child element of EACH card, hence is imported here instead of App.js
import heart from "../svg/heart.svg"; 

export default function AnimalCard({ animal }) {
  const [liked, setLiked] = useState(false);

   // clicking on heart = setting Liked status
  const toggleLike = () => setLiked(!liked);

  return (
    <div
      className="animal-card"
      style={{
        position: "relative",
        display: "inline-block",
        margin: "1rem",
        textAlign: "center",
      }}
    >
      <img
        src={animal.image}
        alt={animal.name}
        style={{
          width: "15vw",
          maxWidth: "150px",
          borderRadius: "0.5rem",
        }}
      />
      <img
        src={heart}
        alt="heart"
        onClick={toggleLike}
        style={{
          position: "absolute",
          bottom: "8px",
          right: "8px",
          width: "24px",
          cursor: "pointer",
          transition: "transform 0.2s ease",
          transform: liked ? "scale(2.5)" : "scale(1)",
        }}
      />
      <p>{animal.name}</p>
    </div>
  );
}
