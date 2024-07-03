import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelected } from "../features/filter/filterSlice";
import { _category_join } from "../utils/_utlities_function"; // _cate_join is a func for removing underscore (_)
export default function CategoryList() {
  const { news } = useSelector((state) => state.news);
  const { categories } = useSelector((state) => state.category);

  const categoryFilter = useSelector((state) => state.filter.category);

  const dispatch = useDispatch();

  // let categories = [];
  // news.map((element) => {
  //   categories.push(element.category);
  // })

  return (
    <div className="">
      <h4 className="hidden lg:block w-[126px] h-[30px] text-[20px] text-[#403F3F]">
        All Caterogy
      </h4>
      <div className="">
        <ul className="flex flex-col gap-[30px] pt-[20px]">
          {categories.map((c) => (
            <li
              // activeClass from app.css for displaying category actively

              className={`cate_list w-[267px] hover:h-[64px] hover:bg-[#E7E7E7] hover:border-[1px] hover:border-[#E7E7E7] hover:rounded-[5px] ${
                categoryFilter === c._id && "activeCategory"
              }`}
              key={c._id}
              onClick={() => dispatch(categorySelected(c._id))}
            >
              {_category_join(c.categoryName)}
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
