import React from "react";

const SectionTitle = ({ sectionName, sectionDesc }) => {
  return (
    <div className="pt-12">
      <h6 className="text-center mb-2 dark:text-gray-100 text-blue-600">
        {sectionName}
      </h6>
      <h1 className="text-center mb-7 text-2xl font-bold text-zinc-800 dark:text-gray-200">
        {sectionDesc}
      </h1>
    </div>
  );
};

export default SectionTitle;
