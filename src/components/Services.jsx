import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import Work from "./Work";

export default function Services() {
  return (
    <div className="flex-col pt-3 mx-5 text-justify justify-center">
      <SectionTitle
        sectionName="Our Services"
        sectionDesc="Perfect and Fast Movement"
      />
      <p className="text-[15px] text-gray-300 mb-5 text-center">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business
      </p>
      <div className="text-white font-semibold">
        <Link to="#">
          <span className="text-sm flex items-center gap-2 transition duration-200 hover:translate-x-2">
            Read more <BsArrowRight className="text-lg" />
          </span>
        </Link>
      </div>
    </div>
  );
}
