import React from "react";
import Menu from "./Menu";

const MainSideBar = () => {
  const menuLinks = [{ id: 1, title: "Home", icon: "home" }];
  return (
    <div className="w-72 bg-white h-screen border border-r-2">
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </div>
  );
};

export default MainSideBar;
