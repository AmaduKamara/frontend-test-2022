import React from "react";
import { GiSittingDog } from "react-icons/gi";
import { MdOutlineShowChart } from "react-icons/md";

const Breed = () => {
  return (
    <div>
      <div className="p-3 border rounded-md m-3 flex justify-between bg-white">
        <div className="flex">
          <div className="w-16 h-16 bg-blue-200 flex items-center justify-center rounded-full">
            <GiSittingDog className="text-5xl text-white" />
          </div>
          <div className="ml-3">
            <h2 className="text-lg">Puppy Jota</h2>
            <p className="text-xl font-semibold mt-2">12</p>
          </div>
        </div>
        <MdOutlineShowChart className="text-5xl text-blue-500" />
      </div>
    </div>
  );
};

export default Breed;
