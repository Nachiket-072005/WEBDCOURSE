import { useCallback, useState } from "react";
import "./App.css";
import ChildComp from "./components/ChildComp";
import ExpComp from "./components/ExpComp";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <div>
        {/* <h1>Counter App</h1>
        <p>{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <br />
        <div>
          <h1>Child Component</h1>
          <ChildComp buttonName="Click Me" handleIncrement={handleIncrement} />
        </div> */}
        <ExpComp></ExpComp>
      </div>
    </>
  );
}

export default App;
