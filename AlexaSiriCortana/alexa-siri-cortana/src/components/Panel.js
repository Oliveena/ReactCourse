// I want to add a hovering effect with useState onHover
import React, { useState } from "react";

export default function Panel(props) {
// defining state
const [isHovered, setIsHovered] = useState(false);

// what is hover? mouse above element
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const scaleStyle = {
    // slight size increase
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    // smooth transition on increase/decrease
    transition: "transform 0.3s ease",
    width: "18rem",
  };

  return (

    <div className="card text-center shadow"
      /*adding style and state control*/
      style={scaleStyle}
      /*declaring state changes to watch out for*/
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <img src={props.image} className="card-img-top rounded" alt={`${props.name} logo`} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">@{props.aerobase}</p>
        <p className="card-text">
          {props.name} was created by {props.creator}
        </p>
      </div>
    </div>
  );
}
