import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[25px]">
       <img src={logo}/>
          <div className="flex justify-between gap-3">
            {/* hamburger for navbar */}
            <nav class="container flex justify-between px-4 py-8 mx-auto bg-black">
               
               <div class="hidden space-x-8 lg:flex">
                  <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                      <Link to="/Action">Services</Link>
                        <Link to="/Contact">Projects</Link>
                          </div>

                  <div class="flex lg:hidden">
                     <div class="space-y-2">
                        <span class="block w-8 h-0.5 bg-gray-300 animate-pulse"></span>
                           <span class="block w-6 h-0.5 bg-gray-300 animate-pulse ml-1"></span>
                             <span class="block w-8 h-0.5 bg-gray-300 animate-pulse"></span>
                                </div>
                                    </div>
            </nav>
      </div>
    </div>
  );
};

export default Navbar;
// Need attention:
// ! links not active yet, needs a route