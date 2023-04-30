import React from "react";
import { Link } from "react-router-dom";

export default function UserModal() {
  return (
    <div className="w-[150px] h-[100px] rounded-lg bg-[url('/assets/bg.png')] absolute ">
      <div className="flex flex-col items-center gap-3 mt-[20px]">
        <Link className="text-white" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
