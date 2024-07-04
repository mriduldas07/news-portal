import React from "react";
import { useSelector } from "react-redux";
import { _category_join } from "../utils/_utlities_function";

export default function MyNews() {
  const { news } = useSelector((state) => state.myNews);
  return (
    <div className="overflow-x-auto pt-6">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">List</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">View</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {news.map((item, i) => (
            <tr
              key={item._id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{i + 1}</td>
              <td className="py-3 px-6 text-left">
                {_category_join(item.myNews.category.categoryName)}
              </td>
              <td className="py-3 px-6 text-left">
                <img src={item.myNews.image_url} className="w-16" alt="" />
              </td>
              <td className="py-3 px-6 text-left">{item.myNews.total_view}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
