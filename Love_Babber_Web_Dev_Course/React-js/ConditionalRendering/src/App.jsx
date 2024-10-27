import "./App.css";
import { useState } from "react";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  let [isLogin, setIsLogin] = useState(false);

  // return <>{isLogin ? <Logout /> : <Login />}</>;

  if (!isLogin) {
    return (
      <div>
        <h1>Welcome Everyone to our Web Dev Page@nachiket</h1>
        <Login />
      </div>
    );
  }
  
  return (
    <div>
      <h1>Welcome Everyone to our Web Dev Page@nachiket</h1>
      {isLogin && <Logout />}
    </div>
  );

  // if (isLogin) {
  //   return (
  //     <>
  //       <Logout />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Login />
  //     </>
  //   );
  // }
}

export default App;
