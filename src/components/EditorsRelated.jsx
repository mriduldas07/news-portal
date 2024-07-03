import React from "react";
import { Link } from "react-router-dom";
import { _category_join, _date_formater } from "../utils/_utlities_function";

export default function EditorsRelated({ news }) {
  const { _id, image_url, title, category, author } = news || {};

  return (
    <div className="w-[267px] h-[306px]">
      <Link to={`/news/${_id}`}>
        <img src={image_url} alt="thumnail" />
        <h4 className="pt-[20px] font-semibold text-[16px]">{title}</h4>
      </Link>
      <div className="flex justify-start items-center gap-[20px]">
        <span className="text-xs bg-[#D72050] px-2 text-white py-1">
          {_category_join(category?.categoryName)}
        </span>
        <div className="flex justify-center items-center gap-[10px]">
          <img
            className="w-fit"
            src="/assets/folderIcon.png"
            alt="folderIcon"
          />
          <span className="mt-[3px]">{_date_formater(author?.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
