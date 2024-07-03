import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categorySelected } from "../features/filter/filterSlice";

export default function SingleNews({ news }) {
  const dispatch = useDispatch();
  const { title, image_url, details, category, author } = news || {};
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1">
      <h3 className="font-semibold text-[20px] text-[#403F3F] text-center w-1/2 lg:w-full">
        Dragon News
      </h3>
      <div className="w-full px-1 lg:px-10 lg:w-[849px] bg-[#FFFFFF] border-[1px] border-[#E7E7E7] rounded-[5px] mt-[20px]">
        <div className="lg:px-[20px]">
          <img
            src={image_url}
            alt="news_pic"
            className="w-full lg:h-[411px] lg:mx-auto mt-1 lg:mt-[20px]"
          />
          <h2 className="font-bold lg:text-[25px] text-[#403F3F] lg:leading-[45px] mt-[20px] mx-auto px-2 lg:px-0 w-fit">
            {title}
          </h2>
          <p className="font-normal lg:text-[16px] lg:leading-[26px] text-[#706F6F] mt-[8px]  mx-auto px-2 lg:px-0">
            {details}
          </p>
          <div className="flex justify-center lg:block">
            <div className="w-[300px] h-[48px] bg-[#D72050] flex justify-center items-center gap-[5px] cursor-pointer my-[32px]">
              <img src="/assets/arrow.png" alt="arrow_icon" />
              <p
                className="text-white"
                onClick={() => {
                  dispatch(categorySelected(category._id));
                  navigate("/");
                }}
              >
                All news in this category
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
