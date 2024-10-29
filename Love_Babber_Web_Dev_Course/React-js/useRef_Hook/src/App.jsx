import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();

  // function handleIncrement() {
  //   val.current++;
  //   console.log("Value of val: ", val.current);
  //   setCount(count + 1);
  // }

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    setTime(0);
  }
  return (
    <>
      <div>
        {/* <h1>Count: {count}</h1>
        <button onClick={handleIncrement} ref={btnRef}>
          Increment
        </button>
        <br />
        <br />
        <button onClick={changeColor}>Change Color</button> */}
        <h1>Timer: {time} s</h1>
        <button onClick={startTimer}>Start</button> &nbsp; &nbsp; &nbsp;
        <button onClick={stopTimer}>Stop</button> &nbsp; &nbsp; &nbsp;
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
