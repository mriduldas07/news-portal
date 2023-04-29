import React from "react";

export default function News() {
  return (
    <div className="w-[558px] h-[694px] bg-[#FFFFFF] border-[1px] border-[#E7E7E7] rounded-[5px]">
      <div className=" rounded-tl-[5px] rounded-tr-[5px] border-[1px] border-[#F3F3F3] bg-[#F3F3F3] w-full h-[80px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-[15px] pl-[20px]">
          <img
            src="/assets/3.png"
            alt="profile_pic"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h6 className="font-semibold text-[16px] text-[#403F3F]">
              Awlad Hossain
            </h6>
            <p className="font-normal text-[14px] text-[#706F6F]">2022-08-21</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[13px] pr-[28px]">
          <img src="/assets/saveIcon.png" alt="saveIcon" />
          <img src="/assets/shareIcn.png" alt="shareIcon" />
        </div>
      </div>
      <h1 className="w-[514px] h-[70px] font-bold text-[20px] mt-[14px] pl-[20px] text-[#403F3F]">
        Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid
        Package Yet
      </h1>
      <img
        src="/assets/editorsInsight1.png"
        alt="news_pic"
        className="w-[518px] h-[262px] mx-auto pt-[20px]"
      />
      <p className="mt-[32px] px-[20px] mb-[20px] text-[16px] text-[#706F6F] leading-[26px]">
        Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe,
        Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States,
        Worthy News (Worthy News) – U.S. President Joe Biden has announced
        nearly $3 billion in new U.S. military a...{" "}
        <span className="text-[#ff6200] font-semibold">Read More</span>
      </p>
      <br />
      <div className="border-[1px] border-[#E7E7E7]"></div>
      <div className="flex justify-between items-center mt-[20px]">
        <div className="flex justify-center items-center gap-[10px] pl-[20px]">
          <div className="flex justify-center items-center">
            <img src="/assets/starIcon.png" alt="Rating" />
            <img src="/assets/starIcon.png" alt="Rating" />
            <img src="/assets/starIcon.png" alt="Rating" />
            <img src="/assets/starIcon.png" alt="Rating" />
            <img src="/assets/starIcon.png" alt="Rating" />
          </div>
          <span className="pt-[3px]">4.9</span>
        </div>
        <div className="flex justify-center items-center gap-[10px] pr-[20px]">
          <img src="/assets/eyeIcon.png" alt="Views" />
          <span className="pt-[3px]">499</span>
        </div>
      </div>
    </div>
  );
}
