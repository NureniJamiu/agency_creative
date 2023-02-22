import React from "react";
import about_img from "../Images/about_img.png";
import SectionTitle from "./SectionTitle";
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function About() {
  return (
    <div className="dark:bg-[#0d0d0d]">
      <SectionTitle sectionName="About Us" sectionDesc="Our Teammate" />
      <div className="flex flex-col justify-center mx-5 md:mx-10 lg:mx-28 md:flex-row-reverse md:gap-5 md:items-center">
        <div className="flex-1">
          <div className="text-[15px] dark:text-gray-300 text-zinc-700 md:w-[420px] md:float-right">
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
              tempor at ut auctor maecenas,Lorem ipsum consectetur adipiscing
              elit.
            </p>
          </div>

          <div className="flex mt-8 justify-evenly md:w-[420px] md:float-right">
            <button className="dark:bg-[#E2E2E2] dark:text-black bg-blue-600 text-gray-100 text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 hover:translate-y-1 transition-all duration-200 font-bold">
              About us
            </button>
            <button className="flex items-center gap-3 border-[1.5px] dark:border-neutral-100 border-blue-600 text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36 hover:translate-y-1 transition-all duration-200 font-bold dark:text-gray-300 text-blue-600">
              <AiOutlinePlayCircle className="text-lg" />
              About us
            </button>
          </div>
        </div>

        <div className="my-12 flex-1 md:my-0">
          <img src={about_img} className="w-full" />
        </div>
      </div>
    </div>
  );
}
