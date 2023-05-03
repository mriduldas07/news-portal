import React from "react";
import LatestNewsTicker from "./LatestNewsTicker";

export default function Latest() {
  return (
    <div className="flex justify-center items-center gap-[20px] bg-[#F3F3F3] h-[80px] mx-auto mt-[20px]">
      <div className="w-[110px] h-[48px] bg-[#D72050] text-white flex justify-center items-center">
        Latest
      </div>
      <div className="w-[855px]">
        <LatestNewsTicker />
      </div>
    </div>
  );
}
