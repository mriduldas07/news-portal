import React from "react";

export default function SocialMedia() {
  return (
    <div>
      <h1 className="font-semibold text-[20px] mt-[30px] mb-[20px]">
        Find Us On
      </h1>
      <div className="w-[267px] h-[189px] border-[1px] border-[#E7E7E7] rounded-[5px] mx-auto">
        <div className="flex justify-start items-center gap-[10px] h-[63px] ml-[17px]">
          <img src="/assets/Facebook.png" alt="facebook_icon" />
          <span className="font-medium text-[#706F6F] text-[16px]">
            Facebook
          </span>
        </div>
        <div className="border-[1px] border-[#E7E7E7]"></div>
        <div className="flex justify-start items-center gap-[10px] h-[63px] ml-[17px]">
          <img src="/assets/Twitter.png" alt="twitter_icon" />
          <span className="font-medium text-[#706F6F] text-[16px]">
            Twitter
          </span>
        </div>
        <div className="border-[1px] border-[#E7E7E7]"></div>
        <div className="flex justify-start items-center gap-[10px] h-[63px] ml-[17px]">
          <img src="/assets/Instagram.png" alt="instagram_icon" />
          <span className="font-medium text-[#706F6F] text-[16px]">
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
}

/**
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;

 */
