import React, { useState } from "react";
import classes from "./App.module.css";

function App() {
  const [maxNumber, setMaxNumber] = useState('');
  const [result, setResult] = useState([]);

  const handleNumberChange = (e) => setMaxNumber(e.target.value);
  const handleReset = () => setMaxNumber('');
  const handleNumberItem = (number) => {
    if (number % 15 === 0) return "FizzBuzz";
    else if (number % 3 === 0) return "Fizz";
    else if (number % 5 === 0) return "Buzz";
    else return 'Nothing';
  }
  const handleCount = () => {
    if (!isNaN(+maxNumber) && maxNumber > 0) {
      setResult(Array(+maxNumber).fill(0));

      return;
    }

    alert('Max number is not valid');
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <input
          className={classes.input}
          placeholder="Enter your number"
          value={maxNumber}
          onChange={handleNumberChange}
        />
        <div className={classes.buttonsContainer}>
          <button role={'countButton'} className={classes.apply} onClick={handleCount}>
            Count
          </button>
          <button
            className={classes.reset}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className={classes.resultContainer}>
          Result: <span role={'resultWrapper'}>
          {result.map((_, index) => {
            return <div key={index} >{handleNumberItem(index + 1)}</div>
          })}
        </span>
        </div>
      </div>
    </div>
  );
}

export default App;
