import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
export const Sidebar = () => {
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <SidebarItem />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
