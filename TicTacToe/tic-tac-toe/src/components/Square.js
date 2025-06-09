// value and onSquareClick are props from Board component
export default function Square({value, onSquareClick}) {

return <button className="square" onClick={onSquareClick}>{value}</button>;
}