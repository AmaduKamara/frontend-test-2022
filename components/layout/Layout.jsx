import React from "react";
import MainSideBar from "../sidebar/SideBarMenus";

const Layout = ({ children }) => {
  return (
    <div>
      <MainSideBar />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
