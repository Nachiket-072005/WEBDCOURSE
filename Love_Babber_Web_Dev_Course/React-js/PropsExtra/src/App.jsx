import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button handleClick={handleClick}>
        <Card>
          <h1>{count}</h1>
          <p>Click me</p>
        </Card>
      </Button>
      {/* <div>
        <Card name="Nachiket">
          <h1>Card Title</h1>
          <p>Card Description</p>
        </Card>
        <Card children="I am a children"></Card>
      </div> */}
    </>
  );
}

export default App;
