import "./App.css";
import { createContext, useEffect, useState } from "react";
import ChildA from "./components/ChildA";

// step1: create context
// const userContext = createContexTheme
const ThemeContext = createContext();
// step2: wrap all the components in the provider
// step3: pass value
// step4: go inside the consumer and cosume the value

function App() {
  // let [user, setUser] = useState({ name: "Nachiket" });
  let [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
// export { userContext };
export { ThemeContext };
