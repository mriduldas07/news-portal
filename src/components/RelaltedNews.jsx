import React from "react";
import { dateForRelatedNews } from "../utils/datePiker";
import {
  _author_date_split,
  _category_join,
  _date_formater,
} from "../utils/_utlities_function";
import { Link } from "react-router-dom";

export default function RelaltedNews({ news }) {
  const { title, category, image_url, id, author } = news || {};
  return (
    <div className="w-[267px] h-[306px]">
      <Link to={`/news/${id}`}>
        <img src={image_url} alt="thumnail" />
        <h4 className="pt-[20px] font-semibold text-[16px]">{title}</h4>
      </Link>
      <div className="flex justify-start items-center gap-[20px]">
        <span>{_category_join(category)}</span>
        <div className="flex justify-center items-center gap-[10px]">
          <img
            className="w-fit"
            src="/assets/folderIcon.png"
            alt="folderIcon"
          />
          <span className="mt-[3px]">
            {_date_formater(_author_date_split(author.published_date))}
          </span>
        </div>
      </div>
    </div>
  );
}
