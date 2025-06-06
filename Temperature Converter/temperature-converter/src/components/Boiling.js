export default function Boiling({ celcius }) {
  if (celcius >= 100) {
    return <p>Water would boil.</p>;
  } else if (celcius <= 0) {
    return <p>Water would freeze.</p>;
  } else {
    return <p>Water is in liquid state.</p>;
  }
}
