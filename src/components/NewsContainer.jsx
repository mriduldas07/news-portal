import React from "react";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import CreateNewspaper from "./CreateNewspaper";
import News from "./News";
import QJone from "./QJone";
import RelaltedNews from "./RelaltedNews";
import SocialLogin from "./SocialLogin";
import SocialMedia from "./SocialMedia";

export default function NewsContainer() {
  const { news, isLoading, isError } = useSelector((state) => state.news);

  const categoryFilter = useSelector((state) => state.filter.category);

  // filtering for tranding news
  const trandingArray = news?.filter((n) => n.others_info?.is_trending);

  // data maping for news Container
  let newsContent;
  if (isLoading) return (newsContent = <p>Loading...</p>);

  if (!isLoading && isError)
    return (newsContent = <p>Something Went Wrong!!!</p>);

  if (!isLoading && !isError && news.length > 0) {
    newsContent = news
      .filter((f) => {
        if (categoryFilter) {
          return f.category._id === categoryFilter;
        }
        return f;
      })
      .map((n) => <News key={n._id} news={n} />);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:mt-[80px]">
      <div className="lg:col-span-3">
        <div className="hidden lg:block">
          <CategoryList />
        </div>
        <div className="mt-[30px]">
          {/* maping on tranding array  */}
          {trandingArray?.map((t) => (
            <RelaltedNews news={t} key={t._id} />
          ))}
        </div>
      </div>
      <div className="col-span-6 mx-auto">
        <h4 className="hidden lg:block mb-[20px] font-semibold text-[20px] text-[#403F3F]">
          Dragon News Home
        </h4>
        <div className="grid gap-[30px]">
          <div className="grid gap-8">{newsContent}</div>
          <div className="block lg:hidden">
            {trandingArray?.map((t) => (
              <RelaltedNews news={t} key={t._id} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-3">
        <SocialLogin />
        <SocialMedia />
        <QJone />
        <CreateNewspaper />
      </div>
    </div>
  );
}
