import { useState, useEffect } from "react";

const Demo2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Call");

    return () => {
      console.log("Cleanup Call");
    };
  }, []);

  console.log("Demo2 render");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Demo2 Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Demo2;
