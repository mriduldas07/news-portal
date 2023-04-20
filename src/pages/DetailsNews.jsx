import React from "react";
import SingleNews from "../components/SingleNews";
import RelatedEditor from "../components/RelatedEditor";
import SocialLogin from "../components/SocialLogin";
import SocialMedia from "../components/SocialMedia";
import QJone from "../components/QJone";

export default function DetailsNews() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-[30px]">
      <div className="col-span-9">
        <SingleNews />
        <RelatedEditor />
      </div>
      <div className="col-span-3">
        <SocialLogin />
        <SocialMedia />
        <QJone />
      </div>
    </div>
  );
}
