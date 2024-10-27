import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  // first -> side-effect function
  // second -> clean-up function
  // third -> comma seperated dependency lists

  // Variation-1:
  // It runs on each render cycle
  // useEffect(() => {
  //   alert("I am Clicked!");
  // });

  // Variation-2:
  // It runs only once after the initial render
  // useEffect(() => {
  //   alert("I am Clicked!");
  // }, []);

  // Variation-3:
  // It runs only after something changes in the dependency list
  // useEffect(() => {
  //   alert("I am Clicked!");
  // }, [count]);

  // Variation-4:
  // It runs after so many dependency list changes
  // useEffect(() => {
  //   alert("I am Clicked!");
  // }, [count, total]);

  // Variation-5:
  // For clean-up function
  useEffect(() => {
    alert("I am Clicked!");
    return () => {
      alert("Clean-up Function");
    };
  }, [count]);

  let handleClicked = () => {
    setCount(count + 1);
  };

  let handleTotal = () => {
    setTotal(total + 1);
  };

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h3>Value of Counter is {count}</h3>
        <button onClick={handleClicked}>Count</button>

        <h3>Value of Total is {total}</h3>
        <button onClick={handleTotal}>Total</button>
      </div>
    </>
  );
}

export default App;
