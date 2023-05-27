import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { _category_join } from "../utils/_utlities_function"; // _cate_join is a func for removing underscore (_)
import { categorySelected } from "../features/filter/filterSlice";
export default function CategoryList() {
  const { news } = useSelector((state) => state.news);

  const categoryFilter = useSelector((state) => state.filter.category);

  const dispatch = useDispatch();

  let categories = [];
  news.map((element) => {
    categories.push(element.category);
  });

  // use set func for unique data
  const categorySet = new Set(categories);
  const categoryArr = [...categorySet];

  return (
    <div>
      <h4 className="w-[126px] h-[30px] text-[20px] text-[#403F3F]">
        All Caterogy
      </h4>
      <div className="">
        <ul className="flex flex-col gap-[30px] pt-[20px]">
          {categoryArr.map((c, i) => (
            <li
              // activeClass from app.css for displaying category actively

              className={`cate_list w-[267px] hover:h-[64px] hover:bg-[#E7E7E7] hover:border-[1px] hover:border-[#E7E7E7] hover:rounded-[5px] ${
                categoryFilter === c && "activeCategory"
              }`}
              key={i}
              onClick={() => dispatch(categorySelected(c))}
            >
              {_category_join(c)}
            </li>
          ))}

          <li
            className="cate_list hover:h-[64px] hover:bg-[#E7E7E7] hover:border-[1px] hover:border-[#E7E7E7] hover:rounded-[5px]"
            onClick={() => dispatch(categorySelected(""))}
          >
            All News
          </li>
        </ul>
      </div>
    </div>
  );
}
