import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("counter component render");

  const increment = () => {
    setCount((prev) => {
      console.log("prev-1 before:", prev);
      prev = prev + 1;
      console.log("prev-1 after:", prev);
      return prev;
    });
    setCount((prev) => {
      console.log("prev-2 before:", prev);
      prev = prev + 1;
      console.log("prev-2 after:", prev);
      return prev;
    });

    console.log("count:", count);
  };
  return (
    <div id="counter-component">
      <h1>Counter Component</h1>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
