import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <div className="flex-col text-justify justify-center">
      <SectionTitle
        sectionName="Our Services"
        sectionDesc="Perfect and Fast Movement"
      />
      <p className="p-1 m-2 text-sm">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business
      </p>

      <div>
        <Link to="#">Read more </Link>
      </div>
      {/* services icons */}
      <div>
        <div className="flex-col ">
          <p>Social Media Management</p>
        </div>
      </div>
    </div>
  );
}
