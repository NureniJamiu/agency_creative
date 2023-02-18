import React from "react";
import intro_img from "../Images/intro_img.png";

const Intro = () => {
  return (
    <div className="flex-col ">
      <div className="text-center">
        <h1 className="p-4 text-3xl font-bold text-gray-200 ">
          Make your dream <br />
          business goal come true
        </h1>
        <p className="text-md mb-10 w-96 mx-auto text-gray-300">
          {/* removed <br/> tags and instead set a width of 24rem (w-96) and a "mx-auto" to center the paragraph element horizontally. Doing it this way will help a lot when it comes to making it responsive*/}
          when you need us for improve your business, then come with us to help
          your business have reach it, you just sit and feel that goal.
        </p>

        {/* Changed the button to have a background set to white and blue when hovered on and also change the text colors respectively, and finally a little bit of transition to spice it up */}
        <button className="bg-white text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 hover:bg-[#377DFF] hover:text-white transition-all duration-200">
          Start Project
        </button>

        {/* Image - 1st in the page */}
        <div className="align-middle mt-5">
          <img src={intro_img} />
        </div>
      </div>
    </div>
  );
};

// ! image not responding to desktop alignment to centre
export default Intro;
