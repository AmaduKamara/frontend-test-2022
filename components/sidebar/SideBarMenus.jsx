import React from "react";
import Menu from "./Menu";

const MainSideBar = () => {
  const appLinks = [
    { id: 1, title: "Home", icon: "", count: "" },
    { id: 2, title: "Notifications", icon: "", count: "4" },
    { id: 3, title: "Messages", icon: "", count: "24" },
    { id: 4, title: "Settings", icon: "", count: "" },
    { id: 5, title: "Templates", icon: "", count: "" },
    { id: 5, title: "Reporting", icon: "", count: "" },
  ];
  const clientLinks = [
    { id: 1, title: "My Clients", icon: "" },
    { id: 2, title: "New Client", icon: "" },
  ];
  const invoicingLinks = [
    { id: 1, title: "My Invoices", icon: "" },
    { id: 2, title: "New Invoices", icon: "" },
  ];
  const filesLinks = [
    { id: 1, title: "My Files", icon: "" },
    { id: 2, title: "Upload", icon: "" },
  ];
  const scheduleLinks = [
    { id: 1, title: "My Schedule", icon: "" },
    { id: 2, title: "New Session", icon: "" },
  ];
  const coursesLinks = [
    { id: 1, title: "My Courses", icon: "" },
    { id: 2, title: "New Course", icon: "" },
  ];

  return (
    <div className="w-96 bg-white h-screen border border-r-2">
      <div className="flex justify-center mt-4 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="py-2 px-3 border shadow rounded w-full mx-4 focus:outline-blue-500"
        />
      </div>
      <div className="py-2 px-4">
        {appLinks.map((link) => (
          <Menu
            key={link.id}
            title={link.title}
            icon={link.icon}
            count={link.count}
          />
        ))}
      </div>
      <div className="py-2 px-4 mt-2">
        <p className="uppercase ml-2 text-gray-400">Clients</p>
        {clientLinks.map((link) => (
          <Menu key={link.id} title={link.title} icon={link.icon} />
        ))}
      </div>
      <div className="py-2 px-4 mt-2">
        <p className="uppercase ml-2 text-gray-400">Invoicing</p>
        {invoicingLinks.map((link) => (
          <Menu key={link.id} title={link.title} icon={link.icon} />
        ))}
      </div>
      <div className="py-2 px-4 mt-2">
        <p className="uppercase ml-2 text-gray-400">Files</p>
        {filesLinks.map((link) => (
          <Menu key={link.id} title={link.title} icon={link.icon} />
        ))}
      </div>
      <div className="py-2 px-4 mt-2">
        <p className="uppercase ml-2 text-gray-400">Schedule</p>
        {scheduleLinks.map((link) => (
          <Menu key={link.id} title={link.title} icon={link.icon} />
        ))}
      </div>
      <div className="py-2 px-4 mt-2">
        <div className="flex justify-between items-center">
          <p className="uppercase ml-2 text-gray-400">Courses</p>
          <a href="#" className="text-blue-500 text-sm">
            Coming Soon
          </a>
        </div>
        {coursesLinks.map((link) => (
          <Menu key={link.id} title={link.title} icon={link.icon} />
        ))}
      </div>
      <div className="py-2 px-4 mt-2">
        <p className="uppercase ml-2 text-gray-500">Help</p>
      </div>
    </div>
  );
};

export default MainSideBar;
