import React from "react";
import SideBarMenus from "../sidebar/SideBarMenus";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBarMenus />
      <div className="w-full">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
