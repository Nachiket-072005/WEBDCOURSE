import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cards, setcards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts"); // fetch data from api
    let data = await a.json(); // convert data to json
    setcards(data); // set data to state
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
      <div className="container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: UserId: {card.userId}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
