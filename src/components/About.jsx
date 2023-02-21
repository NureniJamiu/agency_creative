import React from "react";
import about_img from "../Images/about_img.png";
import SectionTitle from "./SectionTitle";
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex-col justify-center mx-5">
      <SectionTitle sectionName="About Us" sectionDesc="Our Teammate" />
      <div className="text-[15px] text-gray-300">
        <p>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
          tempor at ut auctor maecenas,Lorem ipsum consectetur adipiscing elit.
        </p>
      </div>

      {/* buttons - about us */}
      <div className="flex mt-8 justify-evenly">
        <button className="bg-[#E2E2E2] text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36">
          About us
        </button>
        <button className="flex items-center gap-3 border-[1.5px] border-neutral-100 text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36">
          <AiOutlinePlayCircle className="text-lg" />
          About us
        </button>
      </div>
      {/* image - 2nd img in page */}
      <div className="my-12">
        <img src={about_img} className="w-full" />
      </div>
    </div>
  );
}
