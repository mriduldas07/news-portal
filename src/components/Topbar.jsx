import React from "react";
import { dateForHeader } from "../utils/datePiker";

export default function Topbar() {
  return (
    <div className="flex justify-center flex-col items-center w-11/12 lg:w-full mx-auto">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="mt-[50px] lg:w-[471px] h-[60px]"
      />
      <p className="mt-[20px] text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="mt-[10px]">{dateForHeader}</p>
    </div>
  );
}
