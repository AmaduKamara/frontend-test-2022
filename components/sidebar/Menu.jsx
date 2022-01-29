import React from "react";
import { BiHomeAlt } from "react-icons/bi";

const Menu = ({ title, icon, count }) => {
  return (
    <div className="my-4">
      <p className="flex items-center justify-between">
        <div className="flex items-center ">
          <BiHomeAlt className="mr-3 text-gray-500 text-2xl" />
          <span className="text-lg text-gray-600">{title}</span>
        </div>
        <span className="w-6 bg-blue-500 text-white text-sm text-center rounded-full">{count}</span>
      </p>
    </div>
  );
};

export default Menu;
