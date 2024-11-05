import './App.css';
import { useState } from 'react';

export const App = (props) => {
  const [count, setCount] = useState(5);
  
  const minCount = 1;
  const maxCount = 10;

  const handleCountDownClick = () => {
    if (count <= minCount) return;
    setCount(count - 1);
  };

  const handleCountUpClick = () => {
    if (count >= maxCount) return;
    setCount(count + 1);
  };

  return (
    <div className="app">
      <h1>{props.name}</h1>
      <div className="counter">
        <h2>Counter: {count}</h2>
        <input value={count} readOnly />
        <button onClick={handleCountDownClick}>
          -
        </button>
        <button onClick={handleCountUpClick}>
          +
        </button>
      </div>
    </div>
  );
};
