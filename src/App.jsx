import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
