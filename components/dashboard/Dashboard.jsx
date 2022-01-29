import React from "react";
import DashboardHeader from "./DashboardHeader";
import Breeds from "./Breeds";
import { BsArrowUp } from "react-icons/bs";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  return (
    <div className="w-full">
      <DashboardHeader />
      <div className="flex mx-4 mt-5">
        <div className="w-4/6  mr-3">
          <div className="border rounded-md p-4 w-full flex bg-white">
            <span className="flex justify-center items-center text-center w-10 h-10 rounded-full">
              <BsArrowUp className="text-green-500 text-xl" />
            </span>
            <div className="ml-3">
              <h2 className="text-lg">Total Clients</h2>
              <p className="text-xl font-semibold mt-2">12000</p>
            </div>
          </div>
          <div className="flex mt-5 bg-white">
            <div className="border rounded-md p-4 w-full flex mr-4">
              <span className="flex justify-center items-center text-center w-10 h-10 rounded-full">
                <BsArrowUp className="text-green-500 text-xl" />
              </span>
              <div className="ml-3">
                <h2 className="text-lg">Registered Clients</h2>
                <p className="text-xl font-semibold mt-2">1188</p>
              </div>
            </div>
            <div className="border rounded-md p-4 w-full flex bg-white">
              <span className="flex justify-center items-center text-center w-10 h-10 rounded-full">
                <BsArrowUp className="text-green-500 text-xl" />
              </span>
              <div className="ml-3">
                <h2 className="text-lg">Unregistered Clients</h2>
                <p className="text-xl font-semibold mt-2">12</p>
              </div>
            </div>
          </div>
          {/* Line Chart */}
          <LineChart />
        </div>

        <div className="w-2/6 mx-3">
          <div className="border rounded-md p-4 bg-white">
            <h2 className="text-lg">Total dogs</h2>
            <p className="text-xl font-semibold mt-2">12000</p>
          </div>
          <PieChart />
        </div>
      </div>
      <div className="mt-5 mx-3">
        {/* Breeds Section */}
        <div className="mt-10 mb-4 ml-2">
          <h3 className="text-2xl font-semibold">Breeds(24)</h3>
        </div>
        <Breeds />
      </div>
    </div>
  );
};

export default Dashboard;
