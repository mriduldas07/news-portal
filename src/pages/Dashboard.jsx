import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3">
          <DashboardSidebar />
        </div>
        <div className="col-span-9">
          <h1 className="font-bold text-3xl">Overview</h1>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
