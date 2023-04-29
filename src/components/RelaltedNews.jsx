import React from "react";
import { dateForRelatedNews } from "../utils/datePiker";

export default function RelaltedNews() {
  return (
    <div className="w-[267px] h-[306px]">
      <img src="/assets/1.png" alt="thumnail" />
      <h4 className="pt-[20px] font-semibold text-[20px]">
        Bayern Slams Authorities Over Flight Delay to Club World Cup
      </h4>
      <div className="flex justify-start items-center gap-[20px]">
        <span>Sports</span>
        <div className="flex justify-center items-center gap-[10px]">
          <img
            className="w-fit"
            src="/assets/folderIcon.png"
            alt="folderIcon"
          />
          <span className="mt-[3px]">{dateForRelatedNews}</span>
        </div>
      </div>
    </div>
  );
}
