import React from "react";

const SectionTitle = ({ sectionName, sectionDesc }) => {
  return (
    <div className="mt-12">
      <h6 className="text-center mb-2">{sectionName}</h6>
      <h1 className="text-center mb-7 text-2xl font-bold text-gray-200">
        {sectionDesc}
      </h1>
    </div>
  );
};

export default SectionTitle;
