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
    <div className="flex-col px-5 md:px-10 lg:px-28 justify-center dark:bg-[#0d0d0d]">
      <SectionTitle sectionName="Our Portfolio" sectionDesc="What do we do" />

      <p className="md:w-[70%] md:text-center dark:text-gray-300 mx-auto text-zinc-800">
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business.
      </p>

      <div className="grid md:grid-cols-3 gap-5 my-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center align-center md:hover:scale-105 transition-all duration-200"
          >
            <img src={project.image} alt={project.text} className="w-full" />
            <h3 className="absolute bottom-2 left-4 font-bold text-xl">
              {project.text}
            </h3>
          </div>
        ))}
      </div>

      {/* buttons - about us */}
      <div className="flex p-3 justify-evenly">
        <small className="dark:bg-[#0d0d0d] bg-gray-100 border-2 dark:border-gray-300 border-blue-600 dark:text-gray-300 text-blue-600 text-base rounded-3xl py-2.5 font-bold px-10 justify-center dark:hover:bg-gray-300 hover:bg-blue-600 dark:hover:text-black hover:text-gray-100 transition-all duration-200">
          See All Portfolio
        </small>
      </div>
    </div>
  );
};

export default Portfolio;
