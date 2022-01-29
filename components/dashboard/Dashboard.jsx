import React from "react";
import DashboardHeader from "./DashboardHeader";
import { BsArrowUp } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex mx-4 mt-5">
        <div className="w-4/6  mr-3">
          <div className="border rounded-md p-4 w-full flex">
            <span className="bg-blue-100 flex justify-center items-center text-center w-10 h-10 rounded-full">
              <BsArrowUp />
            </span>
            <div className="ml-3">
              <h2 className="text-lg">Total Clients</h2>
              <p className="text-xl font-semibold mt-2">12000</p>
            </div>
          </div>
        </div>

        <div className="w-2/6 mx-3">
          <div className="border rounded-md p-4">
            <h2 className="text-lg">Total dogs</h2>
            <p className="text-xl font-semibold mt-2">12000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
