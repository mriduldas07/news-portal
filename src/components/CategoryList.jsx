import React from "react";
export default function CategoryList() {
  return (
    <div>
      <h4 className="w-[126px] h-[30px] font-semibold text-[20px] text-[#403F3F]">
        All Caterogy
      </h4>
      <div className="">
        <ul className="flex flex-col gap-[30px] pt-[20px]">
          <li className="cate_list w-[267px] h-[64px] bg-[#E7E7E7] border-[1px] border-[#E7E7E7] rounded-[5px]">
            National News
          </li>
          <li className="cate_list">Breaking News</li>
          <li className="cate_list">Regular News</li>
          <li className="cate_list">International News</li>
          <li className="cate_list">Sports</li>
          <li className="cate_list">Entertainment</li>
          <li className="cate_list">Culture</li>
          <li className="cate_list">Arts</li>
          <li className="cate_list">All News</li>
        </ul>
      </div>
    </div>
  );
}
