import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount((currCount) => currCount + 1);
  }

  return (
    <div>
      <h2>Counter = {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
