import React from "react";
import MainSideBar from "../sidebar/MainSideBar";

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
