import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  let [input, setInput] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function expTask(num) {
    console.log("Task started");
    for (let i = 1; i <= 1000000000; i++) {}
    return num * num;
  }

  let result = useMemo(() => expTask(input), [input]);

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <br />
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <h1>Result: {result}</h1>
      </div>
    </>
  );
}

export default App;
