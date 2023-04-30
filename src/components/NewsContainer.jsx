import React, { useEffect } from "react";
import CategoryList from "./CategoryList";
import RelaltedNews from "./RelaltedNews";
import News from "./News";
import SocialLogin from "./SocialLogin";
import SocialMedia from "./SocialMedia";
import QJone from "./QJone";
import CreateNewspaper from "./CreateNewspaper";
import { useSelector } from "react-redux";

export default function NewsContainer() {
  const { news, isLoading, isError } = useSelector((state) => state.news);

  // filtering for tranding news
  const trandingArray = news?.filter((n) => n.others_info.is_trending);

  // data maping for news Container
  let newsContent;
  if (isLoading) return (newsContent = <p>Loading...</p>);

  if (!isLoading && isError)
    return (newsContent = <p>Something Went Wrong!!!</p>);

  if (!isLoading && !isError && news.length > 0) {
    newsContent = news.map((n) => <News key={n.id} news={n} />);
  }

  return (
    <div className="grid grid-cols-12 gap-4 mt-[80px]">
      <div className="col-span-3">
        <CategoryList />
        <div className="mt-[30px]">
          {/* maping on tranding array  */}
          {trandingArray?.map((t) => (
            <RelaltedNews news={t} />
          ))}
        </div>
      </div>
      <div className="col-span-6 mx-auto">
        <h4 className="mb-[20px] font-semibold text-[20px] text-[#403F3F]">
          Dragon News Home
        </h4>
        <div className="grid gap-[30px]">{newsContent}</div>
      </div>
      <div className="col-span-3">
        <SocialLogin />
        <SocialMedia />
        <QJone />
        <CreateNewspaper />
      </div>
    </div>
  );
}
