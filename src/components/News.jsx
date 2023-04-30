import React from "react";
import { _author_date_split } from "../utils/_utlities_function";
import { Link } from "react-router-dom";

export default function News({ news }) {
  const { author, title, total_view, rating, image_url, details, id } =
    news || {};
  const {
    name: author_name,
    published_date: author_publish_date,
    img: author_img,
  } = author || {};
  return (
    <div className="w-[558px] h-[694px] bg-[#FFFFFF] border-[1px] border-[#E7E7E7] rounded-[5px]">
      <div className=" rounded-tl-[5px] rounded-tr-[5px] border-[1px] border-[#F3F3F3] bg-[#F3F3F3] w-full h-[80px] flex justify-between items-center">
        <div className="flex justify-center items-center gap-[15px] pl-[20px]">
          <img
            src={author_img}
            alt="profile_pic"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h6 className="font-semibold text-[16px] text-[#403F3F]">
              {author_name}
            </h6>
            <p className="font-normal text-[14px] text-[#706F6F]">
              {_author_date_split(author_publish_date)}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[13px] pr-[28px]">
          <img
            className="cursor-pointer"
            src="/assets/saveIcon.png"
            alt="saveIcon"
          />
          <img
            className="cursor-pointer"
            src="/assets/shareIcn.png"
            alt="shareIcon"
          />
        </div>
      </div>
      <h1 className="w-[514px] h-[70px] font-bold text-[20px] mt-[14px] pl-[20px] text-[#403F3F]">
        {title}
      </h1>
      <img
        src={image_url}
        alt="news_pic"
        className="w-[518px] h-[262px] mx-auto pt-[20px]"
      />
      <p className="mt-[32px] px-[20px] mb-[20px] text-[16px] text-[#706F6F] leading-[26px]">
        {details.split(" ").slice(0, 40).join(" ") + "..."}
        <span className="text-[#ff6200] font-semibold cursor-pointer hover:font-bold">
          <Link to={`/news/${id}`}>Read More</Link>
        </span>
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
          <span className="pt-[3px]">{rating.number}</span>
        </div>
        <div className="flex justify-center items-center gap-[10px] pr-[20px]">
          <img src="/assets/eyeIcon.png" alt="Views" />
          <span className="pt-[3px]">{total_view}</span>
        </div>
      </div>
    </div>
  );
}
