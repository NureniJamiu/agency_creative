import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-[25px]">
      <h3 className="text-lg">
        Agency<span className="font-bold">Creative</span>
      </h3>
      <div className="flex justify-between gap-3">
        <a className="cursor-pointer hover:text-blue-600">about</a>
        <a className="cursor-pointer hover:text-blue-600">blog</a>
        <a className="cursor-pointer hover:text-blue-600">contact</a>
      </div>
    </div>
  );
};

export default Navbar;
