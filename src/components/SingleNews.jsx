import React from "react";

export default function SingleNews() {
  return (
    <div className="mx-auto">
      <h3 className="font-semibold text-[20px] text-[#403F3F]">Dragon News</h3>
      <div className="w-[849px] bg-[#FFFFFF] border-[1px] border-[#E7E7E7] rounded-[5px] mt-[20px]">
        <div className="px-[20px]">
          <img
            src="/assets/editorsInsight1.png"
            alt="news_pic"
            className="w-[789] h-[411px] mx-auto mt-[20px]"
          />
          <h2 className="font-bold text-[25px] text-[#403F3F] leading-[45px] mt-[20px]">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </h2>
          <p className="font-normal text-[16px] leading-[26px] text-[#706F6F] mt-[8px]">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military aid for Kyiv as
            Ukraine marked its independence day six months after Russia invaded
            the country.'The United States of America is committed to supporting
            the people of Ukraine as they continue the fight to defend their
            sovereignty. As part of that commitment, I am proud to announce our
            biggest tranche of security assistance to date: approximately $2.
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military aid for Kyiv as
            Ukraine marked its independence day six months after Russia invaded
            the country.'The United States of America is committed to supporting
            the people of Ukraine as they continue the fight to defend their
            sovereignty. As part of that commitment, I am proud to announce our
            biggest tranche of security assistance to date: approximately $2.
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
