import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, setArr] = useState(["No moves yet!"]);
  let updateBlue = () => {
    setMoves((prevVal) => {
      return { ...prevVal, blue: prevVal.blue + 1 };
    });

    setArr((arr) => {
      return [...arr, " Blue Moves +1"];
    });
  };

  let updateYellow = () => {
    setMoves((prevVal) => {
      return { ...prevVal, yellow: prevVal.yellow + 1 };
    });

    setArr((arr) => {
      return [...arr, " Yellow Moves +1"];
    });
  };

  let updateGreen = () => {
    setMoves((prevVal) => {
      return { ...prevVal, green: prevVal.green + 1 };
    });

    setArr((arr) => {
      return [...arr, " Green Moves +1"];
    });
  };
  let updateRed = () => {
    setMoves((prevVal) => {
      return { ...prevVal, red: prevVal.red + 1 };
    });

    setArr((arr) => {
      return [...arr, " Red Moves +1"];
    });
  };
  return (
    <div>
      <p>Game begins!</p>
      <div className="className">
        <p>{arr}</p>
        <p>Blue Move = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Move = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green Move = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Move = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
