import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";

const MenuList = () => {
  return (
    <div className="my-4 mx-4">
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <BiHomeAlt className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Home</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Nitifications</span>
          </div>
          <span className="w-6 bg-blue-500 text-white text-sm text-center rounded-full">
            4
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Messages</span>
          </div>
          <span className="w-6 bg-blue-500 text-white text-sm text-center rounded-full">
            24
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <BiHomeAlt className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Settings</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlineBarChart className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Reporting</span>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <p className="uppercase text-gray-400 text-sm px-2">My clients</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <FiUsers className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">My Clients</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">New Client</span>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <p className="uppercase text-gray-400 text-sm px-2">Invoucing</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlineFileText className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">My Invoices</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">New Invoice</span>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <p className="uppercase text-gray-400 text-sm px-2">Files</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlineFile className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">My Files</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Upload</span>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <p className="uppercase text-gray-400 text-sm px-2">Schedule</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <BiCalendar className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">My Schedule</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">New Schedule</span>
          </div>
        </div>
      </div>

      <div className="border p-2 mt-6 rounded-md pb-2">
        <div className="mt-2 mb-4 flex justify-between items-center">
          <p className="uppercase text-gray-500 text-sm px-2">Courses</p>
          <p className="text-blue-500">Coming soon</p>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <BiCalendar className="mr-3 text-gray-300 text-2xl" />
              <span className="text-lg text-gray-300">My Courses</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <AiOutlinePlus className="mr-3 text-gray-300 text-2xl" />
              <span className="text-lg text-gray-300">New Course</span>
            </div>
          </div>
          <p className="text-xs mt-2 px-3">
            We are still developing this, so
            <br />
            bear with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
