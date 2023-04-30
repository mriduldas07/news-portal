import React from "react";

export default function SingleNews({ news }) {
  const { title, image_url, details } = news || {};
  return (
    <div className="mx-auto">
      <h3 className="font-semibold text-[20px] text-[#403F3F]">Dragon News</h3>
      <div className="w-[849px] bg-[#FFFFFF] border-[1px] border-[#E7E7E7] rounded-[5px] mt-[20px]">
        <div className="px-[20px]">
          <img
            src={image_url}
            alt="news_pic"
            className="w-[789] h-[411px] mx-auto mt-[20px]"
          />
          <h2 className="font-bold text-[25px] text-[#403F3F] leading-[45px] mt-[20px]">
            {title}
          </h2>
          <p className="font-normal text-[16px] leading-[26px] text-[#706F6F] mt-[8px]">
            {details}
          </p>
          <div className="w-[300px] h-[48px] bg-[#D72050] flex justify-center items-center gap-[5px] cursor-pointer my-[32px]">
            <img src="/assets/arrow.png" alt="arrow_icon" />
            <p className="text-white">All news in this category</p>
          </div>
        </div>
      </div>
    </div>
  );
}
