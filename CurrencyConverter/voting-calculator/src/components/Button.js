export default function VoteButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}