import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { About, Action, Contact, Intro, Navbar, Portifolio, Services, SocialMedia, Testimonials } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Intro/>
      <About/>
      <Services/>
      <Portifolio/>
      <Testimonials/>
      <Action/>
      <Contact/>
      <SocialMedia/>

    </div>
  );
}

export default App;
