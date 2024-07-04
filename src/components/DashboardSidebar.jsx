import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdSpaceDashboard } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

export default function DashboardSidebar() {
  const { pathname } = useLocation();
  return (
    <div className="bg-[#3c3cbe] text-white rounded-md   min-h-[600px] w-[260px] mx-auto">
      <div className="flex items-center justify-center gap-3 py-5">
        <MdSpaceDashboard size={35} />
        <span className="text-2xl font-semibold">Dashboard</span>
      </div>
      <Link to="/dashboard">
        <div
          className={`flex items-center gap-2 pl-5 py-4 h-[45px] cursor-pointer ${
            pathname === "/dashboard" &&
            "bg-white text-black mx-auto w-[210px] rounded-lg"
          }`}
        >
          <BsNewspaper size={28} />
          <span className="text-[20px]">My News</span>
        </div>
      </Link>
      <Link to="/dashboard/myProfile">
        <div
          className={`flex items-center gap-2 pl-5 my-3 h-[45px] cursor-pointer ${
            pathname === "/dashboard/myProfile" &&
            "bg-white text-black mx-auto w-[210px] rounded-lg"
          }`}
        >
          <CgProfile size={28} />
          <span className="text-[20px]">Profile</span>
        </div>
      </Link>
      <Link to="/dashboard/addNews">
        <div
          className={`flex items-center gap-2 pl-5 my-3 h-[45px] cursor-pointer ${
            pathname === "/dashboard/addNews" &&
            "bg-white text-black mx-auto w-[210px] rounded-lg"
          }`}
        >
          <TfiWrite size={23} />
          <span className="text-[20px]">Add News</span>
        </div>
      </Link>
    </div>
  );
}
