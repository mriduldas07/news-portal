import React from "react";
import { Link } from "react-router-dom";
import {
  _author_date_split,
  _category_join,
  _date_formater,
} from "../utils/_utlities_function";

export default function RelaltedNews({ news }) {
  const { title, category, image_url, id, createdAt } = news || {};
  return (
    <div className="lg:w-[267px] h-[306px] px-4">
      <Link to={`/news/${id}`}>
        <img src={image_url} alt="thumnail" />
        <h4 className="pt-[20px] font-semibold text-[16px]">{title}</h4>
      </Link>
      <div className="flex justify-start items-center gap-[20px]">
        <span>{_category_join(category.categoryName)}</span>
        <div className="flex justify-center items-center gap-[10px]">
          <img
            className="w-fit"
            src="/assets/folderIcon.png"
            alt="folderIcon"
          />
          <span className="mt-[3px]">
            {_date_formater(_author_date_split(createdAt))}
          </span>
        </div>
      </div>
    </div>
  );
}
