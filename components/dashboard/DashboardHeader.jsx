import React from "react";

const DashboardHeader = () => {
  return (
    <div className="p-4 bg-white border border-b-2 w-full">
      <h1 className="text-2xl font-normal">Reporting</h1>
      <ul className="flex mt-4 py-2">
        <li className="mr-4 text-lg">Financial</li>
        <li className="text-lg">Client</li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
