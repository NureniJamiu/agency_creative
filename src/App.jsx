import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Link } from "react-router-dom";
import {
  About,
  Action,
  Intro,
  Navbar,
  Portfolio,
  Services,
  Testimonials,
  Footer,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#0D0D0D] font-Nunito text-[#F5F5F5]">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
