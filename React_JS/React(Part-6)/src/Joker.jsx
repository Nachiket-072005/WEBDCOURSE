import { useEffect, useState } from "react";
export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    setJoke(data);
  };
  let [joke, setJoke] = useState({});

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let data = await response.json();
      setJoke(data);
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <button onClick={getNewJoke}>Get a new joke</button>
      <h4>{joke.setup}</h4>
      <h4>{joke.punchline}</h4>
    </div>
  );
}
