import React, { useState } from "react";
import {
  MdSpaceDashboard,
  CgProfile,
  BsNewspaper,
  TfiWrite,
} from "react-icons/all";
import { Link } from "react-router-dom";

export default function DashboardSidebar() {
  const [active, setActive] = useState("");
  return (
    <div className="bg-[#3c3cbe] text-white rounded-md  min-h-[600px] w-[260px] mx-auto">
      <div className="flex items-center justify-center gap-3 py-5">
        <MdSpaceDashboard size={35} />
        <span className="text-2xl font-semibold">Dashboard</span>
      </div>
      <Link to="/dashboard">
        <div
          className={`flex items-center gap-2 pl-5 py-4 h-[45px] cursor-pointer ${
            active === "myNews" &&
            "bg-white text-black mx-auto w-[210px] rounded-lg"
          }`}
          onClick={() => setActive("myNews")}
        >
          <BsNewspaper size={28} />
          <span className="text-[20px]">My News</span>
        </div>
      </Link>
      <Link to="/dashboard/myProfile">
        <div
          className={`flex items-center gap-2 pl-5 my-3 h-[45px] cursor-pointer ${
            active === "profile" &&
            "bg-white text-black mx-auto w-[210px] rounded-lg"
          }`}
          onClick={() => setActive("profile")}
        >
          <CgProfile size={28} />
          <span className="text-[20px]">Profile</span>
        </div>
      </Link>
      <Link to="/dashboard/addNews">
        <div
          className={`flex items-center gap-2 pl-5 my-3 h-[45px] cursor-pointer ${
            active === "addNews" &&
            "bg-white text-black mx-auto w-[210px] rounded-lg"
          }`}
          onClick={() => setActive("addNews")}
        >
          <TfiWrite size={23} />
          <span className="text-[20px]">Add News</span>
        </div>
      </Link>
    </div>
  );
}
