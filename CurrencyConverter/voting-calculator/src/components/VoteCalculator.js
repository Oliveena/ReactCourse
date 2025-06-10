import { useState } from 'react';
import Button  from './Button';

export default function VoteCalculator() {
 // one use state per button
  const [votes, setVotes] = useState([
    { name: "Option 1", count: 0 },
    { name: "Option 2", count: 0 }
  ]);

  // display the option with most votes
  const maxVotes = Math.max(...votes.map(option => option.count));
  const winner = votes.find(option => option.count === maxVotes)?.name;

  // calculating the sum with reduce()
  const sum = votes.reduce((total, option) => total + option.count, 0);

  // this is friendlier for an eventual increase of options than hardcoding "option1, option2"
  const handleVote = (optionName) => {
    // map() to create a copy of the votes array
    const updatedVotes = votes.map(option =>
      option.name === optionName
      // if there are opttions possessing optionName, take them 1 by 1  and increase their count onCLick
        ? { ...option, count: option.count + 1 }
        // if no click action took place, keep options as they are
        : option
    );
    // update useState of every option
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h3>Current votes</h3>

      {votes.map((option) => (
        // mapping every option
        <p key={option.name}>
          {option.name}: {option.count} {option.name === winner && "(is winning)"}
        </p>
      ))}

      {votes.map((option) => (
        <Button
          key={option.name}
          label={`Vote for ${option.name}`}
          onClick={() => handleVote(option.name)}
        />
      ))}

      <p>Total votes : </p>{sum}
    </div>
  );
}