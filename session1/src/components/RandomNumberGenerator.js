function RandomNumberGenerator() {
  let randomNumber = Math.random();
  let lessThan = randomNumber < 0.5;

  return (
    <div>
      <p>Today's number is {randomNumber}</p>
      <p>{lessThan ? "You are not lucky" :  "You are lucky!" }</p>
    </div>
  );
}

export default RandomNumberGenerator;
