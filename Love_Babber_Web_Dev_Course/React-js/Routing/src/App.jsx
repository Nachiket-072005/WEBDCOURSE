import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamsComp";
import Test from "./components/Test";
import Courses from "./components/Courses";
import Reports from "./components/Reports";
import Notfound from "./components/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),

    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  {
    path: "student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp></ParamComp>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <Notfound />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
