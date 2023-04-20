import React from "react";

export default function Navbar() {
  return (
    <div className="mt-[34px]">
      <ul className="flex justify-center items-center text-center w-[1000px] pl-[8.5rem]">
        <li>Home</li>
        <li>About</li>
        <li>Career</li>
      </ul>
      <div className="flex justify-end items-center mt-[-2rem]">
        <img src="/assets/profile.png" className="mr-[9px]" alt="profile" />
        <p className="w-[140px] h-[44px] bg-[#403F3F] flex justify-center items-center font-semibold text-[20px] text-[#FFFFFF] cursor-pointer">
          Login
        </p>
      </div>
    </div>
  );
}
