export default function FruitList(props) {
  const fruits = props.fruits;
  //   console.log(fruits);
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}> {fruit} </li>
      ))}
    </ul>
  );
}
 