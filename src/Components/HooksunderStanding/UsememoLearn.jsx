import React, { useState, useMemo } from "react";

// Component without useMemo
const WithoutMemoComponent = ({ count }) => {
  // Simulating an expensive computation
  const expensiveValue = () => {
    console.log("Performing expensive computation...");
    let result = 0;
    for (let i = 0; i < count * 1000000000; i++) {
      result += i;
    }
    return result;
  };

  const value = expensiveValue(); // Compute value on each render

  return (
    <div>
      <h2>Without useMemo Component</h2>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
    </div>
  );
};

// Component with useMemo
const WithMemoComponent = ({ count }) => {
  // Simulating an expensive computation
  const expensiveValue = useMemo(() => {
    console.log("Performing expensive computation (using useMemo)...");
    let result = 0;
    for (let i = 0; i < count * 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h2>With useMemo Component</h2>
      <p>Count: {count}</p>
      <p>Value: {expensiveValue}</p>
    </div>
  );
};

// Main App component
const UsememoLearn = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(count - 1)}>Decriment Count</button>
      <WithoutMemoComponent count={count} />
      <WithMemoComponent count={count} />
    </div>
  );
};

export default UsememoLearn;
