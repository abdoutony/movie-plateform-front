import React, { useState, useEffect } from "react";

export default function CounterPage2() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    console.log(counter);
  };
  useEffect(() => {
    console.log("Effect");
  }, []);
  return (
    <div className="container bg-white p-5">
      <h1 className="counter-value">{counter}</h1>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
    </div>
  );
}
