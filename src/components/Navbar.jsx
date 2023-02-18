import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[25px]">
      <img src={logo} />
      <div className="flex justify-between gap-3">
        {/* hamburger for navbar */}
        <nav class="container flex justify-between px-4 py-8 mx-auto bg-black">
          <div class="hidden space-x-8 md:flex">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Action">Services</Link>
            <Link to="/Contact">Projects</Link>
          </div>

          <div class="flex md:hidden">
            <FiMenu className="text-3xl" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
// Need attention:
// ! links not active yet, needs a route
