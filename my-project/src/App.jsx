import React, { useState } from 'react';

function NumberDifferenceCalculator() {
  const [numberInput, setNumberInput] = useState('');
  const [result, setResult] = useState('');

  function calculateDifference() {
    let number = numberInput.replace(/\D/g,'');
    let reverse = parseInt(number.toString().split('').reverse().join(''));
    let difference = Math.abs(number - reverse);
    setResult(difference);
  }

  function App(event) {
    setNumberInput(event.target.value);
  }

  return (
    <div className="App">
    <div>
      Number:
      <input type="text" id="numberInput" name="numberInput" value={numberInput} onChange={App} />
      <button type="button" onClick={calculateDifference}>Submit</button>
    </div>
    <p>Result: {result}</p>
  </div>
  );
}

export default NumberDifferenceCalculator;
