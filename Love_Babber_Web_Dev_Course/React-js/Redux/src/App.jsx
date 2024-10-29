import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleIncByAmt = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Counter: {counter}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <br />
        <input
          type="Number"
          placeholder="Enter Amout"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleIncByAmt(amount)}>Increment by Amount</button>
      </div>
    </>
  );
}

export default App;
