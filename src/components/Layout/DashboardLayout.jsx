import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ role, children }) => {
  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 bg-gray-50">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
