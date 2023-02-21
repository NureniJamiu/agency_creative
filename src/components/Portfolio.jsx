import React from "react";
import SectionTitle from "./SectionTitle";
import portfolio1 from "../Images/portfolio1.png";
import portfolio2 from "../Images/portfolio2.png";
import portfolio3 from "../Images/portfolio3.png";

const Portfolio = () => {
  const projects = [
    { image: portfolio1, text: "Design Furniture App" },
    { image: portfolio2, text: "Cloud App" },
    { image: portfolio3, text: "Design Byte App" },
  ];
  return (
    <div className="flex-col mx-5 text-justify justify-center">
      <SectionTitle sectionName="Our Portfolio" sectionDesc="What do we do" />

      <p className="p-1 m-2 text-sm">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business2
      </p>
      {/* image - 2nd img in page */}
      <div className="mt-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center px align-center my-8"
          >
            <img src={project.image} alt={project.text} className="w-full" />
            <h3 className="absolute bottom-2 left-2 font-bold text-xl">
              {project.text}
            </h3>
          </div>
        ))}
      </div>

      {/* buttons - about us */}
      <div className="flex m-3 justify-evenly">
        <small className="bg-black border-2 border-gray-300 text-gray-300 text-base rounded-3xl py-2.5 font-bold px-10 justify-center">
          See All Portfolio
        </small>
      </div>
    </div>
  );
};

export default Portfolio;
