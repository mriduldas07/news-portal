import React from "react";
import RelaltedNews from "./RelaltedNews";

export default function RelatedEditor() {
  return (
    <div className="mt-[30px] mb-[100px]">
      <h3 className="font-semibold text-[25px] text-[#403F3F]">
        Editors Insight
      </h3>
      <div className="grid grid-cols-3 mx-auto gap-[20px] mt-[20px]">
        <RelaltedNews />
        <RelaltedNews />
        <RelaltedNews />
        <RelaltedNews />
        <RelaltedNews />
      </div>
    </div>
  );
}
