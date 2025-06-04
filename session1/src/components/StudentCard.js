function StudentCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>Student Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default StudentCard;