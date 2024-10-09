import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(function sideEffect() {
    console.log("Countx is now", countx);
  }, []);

  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={incCountx}>+1</button>
      <h3>County = {county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
