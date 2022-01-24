import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter((prev) => prev + 1);
  const decrease = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <p>Sairaan nopee FG Dubs counter</p>
      <button onClick={increase}>Increase </button>
      <button onClick={decrease}>Decrease </button>
      <button onClick={reset}>Reset</button>
      <p>{counter}</p>
    </div>
  );
};

export default App;
