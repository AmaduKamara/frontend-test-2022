import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";

const MenuList = () => {
  const router = useRouter();

  return (
    <div className="my-4">
      <Link href="/">
        <a className="flex items-center justify-between mt-8 mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div
            className={
              router.pathname == "/"
                ? "flex items-center border-l-4 border-blue-500 pl-3"
                : "flex items-center pl-4"
            }
          >
            <BiHomeAlt className="mr-3 text-gray-500 text-2xl" />
            <span className="text-lg text-gray-700">Home</span>
          </div>
        </a>
      </Link>

      <Link href="/notifications">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/notifications"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <HiOutlineBell className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">Nitifications</span>
            </div>
            <span className="w-5 bg-blue-500 text-white text-sm text-center rounded-full">
              4
            </span>
          </div>
        </a>
      </Link>

      <Link href="/messages">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/messages"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <BiMessageSquareDetail className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">Messages</span>
            </div>
            <span className="w-8 bg-blue-500 text-white text-sm text-center rounded-full">
              24
            </span>
          </div>
        </a>
      </Link>

      <Link href="/settings">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/settings"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <RiSettings4Line className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">Settings</span>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/reporting">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/reporting"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlineBarChart className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">Reporting</span>
            </div>
          </div>
        </a>
      </Link>

      <div className="mt-6 mb-4 mx-8">
        <p className="uppercase text-gray-400 text-sm">Clients</p>
      </div>
      <Link href="/myclient">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/myclient"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <FiUsers className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">My Clients</span>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/newclient">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/newclient"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">New Client</span>
            </div>
          </div>
        </a>
      </Link>

      <div className="mt-6 mb-4 mx-8">
        <p className="uppercase text-gray-400 text-sm px-2">Invoucing</p>
      </div>
      <Link href="/myinvoices">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/invoices"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlineFileText className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">My Invoices</span>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/newinvoice">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/newinvoice"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">New Invoice</span>
            </div>
          </div>
        </a>
      </Link>

      <div className="mt-6 mb-4 mx-8">
        <p className="uppercase text-gray-400 text-sm">Files</p>
      </div>
      <Link href="/myfiles">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/myfiles"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlineFile className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">My Files</span>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/upload">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/upload"
                  ? "flex items-center mx-4 border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">Upload</span>
            </div>
          </div>
        </a>
      </Link>

      <div className="mt-6 mb-4 mx-8">
        <p className="uppercase text-gray-400 text-sm">Schedule</p>
      </div>
      <Link href="/myschedule">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/myschedule"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <BiCalendar className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">My Schedule</span>
            </div>
          </div>
        </a>
      </Link>

      <Link href="/newschedule">
        <a className="block mx-4 hover:bg-blue-200 py-2 rounded-md">
          <div className="flex items-center justify-between">
            <div
              className={
                router.pathname == "/newschedule"
                  ? "flex items-center border-l-4 border-blue-500 pl-3"
                  : "flex items-center pl-4"
              }
            >
              <AiOutlinePlus className="mr-3 text-gray-500 text-2xl" />
              <span className="text-lg text-gray-700">New Schedule</span>
            </div>
          </div>
        </a>
      </Link>

      <div className="border p-2 mt-6 rounded-md pb-2 mx-4">
        <div className="mt-2 mb-4 flex justify-between items-center">
          <p className="uppercase text-gray-500 text-sm px-2">Courses</p>
          <p className="text-blue-500">Coming soon</p>
        </div>
        <div className="mt-3 mx-2">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center"
            >
              <BiCalendar className="mr-3 text-gray-300 text-2xl" />
              <span className="text-lg text-gray-300">My Courses</span>
            </div>
          </div>
        </div>

        <div className="mt-4 mx-2">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center"
            >
              <AiOutlinePlus className="mr-3 text-gray-300 text-2xl" />
              <span className="text-lg text-gray-300">New Course</span>
            </div>
          </div>
          <p className="text-xs mt-2 text-gray-500">
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
