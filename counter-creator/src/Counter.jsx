import { useState } from "react";

function Counter() {
  // TODO: Implement useState hook here
  const [count, setCount] = useState(0);

  // TODO: Implement increment function
  // Implement a max value that the counter cannot exceed.
  const increment = () => {
    setCount(count + 1);
    if (count >= 12) {
      setCount(count);
    }
  };

  // TODO: Implement decrement function
  // The counter should not go below 0.
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  // Add a reset button that sets the counter back to 0.
  const reset = () => {
    setCount(0);
  };
  // Skip certain numbers
  // skip 5 by setting modulas === 4 then add the count by 2
  const skipNumbers = () => {
    if (count % 5 === 4) {
      setCount(count + 2);
     
    } else {
      setCount(count + 1);
    }
  };

  return (
    
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={skipNumbers}>SkipNumbers</button>
    </div>
  );
}

export default Counter;
