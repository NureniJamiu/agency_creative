import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  function onWindowMatch() {
    if (
      localStorage.isActive === "dark" ||
      (!("isActive" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (isActive) {
      case "moon":
        element.classList.add("dark");
        localStorage.setItem("isActive", "dark");
        break;
      case "sun":
        element.classList.remove("dark");
        localStorage.setItem("isActive", "light");
        break;
      default:
        localStorage.removeItem("isActive");
        break;
    }
  }, [isActive]);
  return (
    <>
      <nav className="flex justify-between items-center px-[25px] dark:bg-[#0D0D0D] dark:text-white">
        <div className="cursor-pointer">
          {isActive === "sun" ? <img src={logo2} /> : <img src={logo} />}
        </div>
        <div className="flex justify-between gap-3">
          {/* hamburger for navbar */}
          <div className="container flex justify-between px-4 py-8 mx-auto">
            <div className="hidden space-x-8 md:flex text-sm">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link to="/About" className="hover:text-blue-400">
                About
              </Link>
              <Link to="/Action" className="hover:text-blue-400">
                Services
              </Link>
              <Link to="/Contact" className="hover:text-blue-400">
                Projects
              </Link>
            </div>

            <div
              onClick={handleClick}
              className="md:hidden transition duration-200 cursor-pointer"
            >
              {!isOpen ? (
                <FiMenu className="text-3xl" />
              ) : (
                <AiOutlineClose className="text-3xl" />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="flex gap-5 bg-gray-300 dark:bg-zinc-800 px-5 py-2 rounded-full text-white">
            <span
              className={`cursor-pointer ${
                isActive === "sun" && "text-blue-600"
              }`}
              title="light mode"
              onClick={() => setIsActive("sun")}
            >
              <BsSunFill />
            </span>
            <span
              className={`cursor-pointer ${
                isActive === "moon" && "text-blue-600"
              }`}
              title="dark mode"
              onClick={() => setIsActive("moon")}
            >
              <BsMoonFill />
            </span>
          </div>
          <small className="hidden md:flex bg-black border-[2px] border-gray-300 text-gray-300 rounded-3xl font-bold px-5 py-2 justify-center hover:bg-gray-300 hover:text-black cursor-pointer transition duration-200">
            Contact us
          </small>
        </div>
      </nav>
      <div
        className={`${
          !isOpen ? "hidden" : "flex py-5"
        } flex-col gap-5 transition-all duration-200 px-8 shadow shadow-gray-700 dark:bg-[#0d0d0d] rounded-b`}
      >
        <Link to="/">
          <p className="hover:border-b-0 hover:border-l-2 border-blue-300 hover:pl-2 transition-all duration-200">
            Home
          </p>
        </Link>
        <Link to="/About">
          <p className="hover:border-l-2 border-blue-300 hover:pl-2 transition-all duration-200">
            About
          </p>
        </Link>
        <Link to="/Action">
          <p className="hover:border-l-2 border-blue-300 hover:pl-2 transition-all duration-200">
            Services
          </p>
        </Link>
        <Link to="/Contact">
          <p className="hover:border-l-2 border-blue-300 hover:pl-2 transition-all duration-200">
            Projects
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
