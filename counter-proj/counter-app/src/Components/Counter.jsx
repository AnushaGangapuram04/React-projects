import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>−</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
