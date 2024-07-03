import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelected } from "../features/filter/filterSlice";
import { _category_join } from "../utils/_utlities_function";

export default function CategoryModal() {
  const { categories } = useSelector((state) => state.category);
  const categoryFilter = useSelector((state) => state.filter.category);

  const dispatch = useDispatch();
  return (
    <div className="rounded-lg bg-[url('/assets/bg.png')] absolute">
      <div className="">
        <div className="flex flex-col items-center gap-2 pt-[20px] pb-5 w-52">
          <span
            className={`w-full px-10 text-sm text-white`}
            onClick={() => dispatch(categorySelected(""))}
          >
            All news
          </span>
          {categories?.map((c) => (
            <span
              key={c._id}
              className={`w-full px-10 text-sm text-white ${
                categoryFilter === c._id && "bg-[#D72050]"
              }`}
              onClick={() => dispatch(categorySelected(c._id))}
            >
              {_category_join(c.categoryName)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
