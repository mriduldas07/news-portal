import React from "react";
import CategoryList from "./CategoryList";
import RelaltedNews from "./RelaltedNews";
import News from "./News";
import SocialLogin from "./SocialLogin";
import SocialMedia from "./SocialMedia";
import QJone from "./QJone";
import CreateNewspaper from "./CreateNewspaper";

export default function NewsContainer() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-[80px]">
      <div className="col-span-3">
        <CategoryList />
        <div className="mt-[30px]">
          <RelaltedNews />
          <RelaltedNews />
          <RelaltedNews />
        </div>
      </div>
      <div className="col-span-6 mx-auto">
        <h4 className="mb-[20px] font-semibold text-[20px] text-[#403F3F]">
          Dragon News Home
        </h4>
        <div className="grid gap-[30px]">
          <News />
          <News />
          <News />
          <News />
        </div>
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
