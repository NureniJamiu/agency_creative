import React from "react";
import about1 from "../Images/about1.png";
import about2 from "../Images/about2.png";

export default function Action() {
  return (
    <div className="dark:bg-[#0d0d0d] flex flex-col px-5 md:px-10 lg:px-28 py-10 md:flex-row-reverse md:items-center">
      <div className="w-full h-96 md:flex-1">
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-2 ">
            <img src={about1} className="rounded-2xl" />
          </div>
          <div className="absolute top-28 left-0 md:left-20">
            <img src={about2} className="rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <p className="text-[28px] font-bold text-center">
            Interesting Collaboration <br />
            With Us?
          </p>
          <p className="text-sm text-center mt-5">
            Help you to reach your business goal
          </p>
        </div>

        <div className="flex  justify-center mt-10 mb-15">
          <button className="bg-blue-600 font-bold dark:bg-white text-gray-100 dark:text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 transition-all shadow-lg shadow-blue-300 duration-200 hover:translate-y-2 hover:shadow-md hover:shadow-blue-300">
            About us
          </button>
        </div>
      </div>
    </div>
  );
}
