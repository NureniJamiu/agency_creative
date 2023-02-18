import React from "react";
import SectionTitle from "./SectionTitle";

export default function Portifolio() {
  return (
    <div>
      <div className="flex-col text-justify justify-center">
        <SectionTitle sectionName="Our Portfolio" sectionDesc="What do we do" />

        <p className="p-1 m-2 text-sm">
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business2
        </p>
        {/* image - 2nd img in page */}
        <div className="mt-5">
          <img src="" />
          <img src="" />
          <img src="" />
        </div>

        {/* buttons - about us */}
        <div className="flex m-3 justify-evenly">
          <button className="bg-[#E2E2E2] text-black text-sm rounded-3xl py-2.5 px-2.5 justify-center w-36">
            see All Photos
          </button>
        </div>
      </div>
    </div>
  );
}
