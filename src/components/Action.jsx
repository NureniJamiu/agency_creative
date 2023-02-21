import React from "react";
import about1 from "../Images/about1.png";
import about2 from "../Images/about2.png";

export default function Action() {
  return (
    <div className="flex flex-col mx-5 py-10">
      <div className="w-full h-96">
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-2 ">
            <img src={about1} className="rounded-2xl" />
          </div>
          <div className="absolute top-28 left-0">
            <img src={about2} className="rounded-2xl" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[28px] text-center">
          Interesting Collaboration <br />
          With Us?
        </p>
        <p className="text-sm text-center mt-5">
          Help you to reach your business goal
        </p>
      </div>

      <div className="flex  justify-center mt-10 mb-15">
        <button className="bg-white text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 transition-all shadow-lg shadow-blue-300 duration-200 hover:translate-y-2 hover:shadow-md hover:shadow-blue-300">
          About us
        </button>
      </div>
    </div>
  );
}
