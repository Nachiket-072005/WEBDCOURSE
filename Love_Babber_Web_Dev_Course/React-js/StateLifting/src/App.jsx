import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  let [name, setName] = useState("");
  return (
    <>
      <div>
        <Card title="Card-1" name={name} setName={setName} />
        <Card title="Card-2" name={name} setName={setName} />
      </div>
    </>
  );
}

export default App;
