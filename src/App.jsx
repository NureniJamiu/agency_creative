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
  // bg-[#0D0D0D] text-[#F5F5F5]
  return (
    <div className="dark:bg[#0d0d0d] dark:text-[#f5f5f5] bg-white text-black font-Nunito ">
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
