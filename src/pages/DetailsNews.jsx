import React, { useEffect } from "react";
import SingleNews from "../components/SingleNews";
import RelatedEditor from "../components/RelatedEditor";
import SocialLogin from "../components/SocialLogin";
import SocialMedia from "../components/SocialMedia";
import QJone from "../components/QJone";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleNews } from "../features/singleNews/singleNewsSlice";

export default function DetailsNews() {
  const { singleNews, isLoading, isError } = useSelector(
    (state) => state.singleNews
  );
  const dispatch = useDispatch();
  const { newsId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleNews(newsId));
  }, [dispatch, newsId]);

  let singleNewsContent;
  if (isLoading) return (singleNewsContent = <p>Loading...</p>);
  if (!isLoading && isError)
    return (singleNewsContent = <p>Something went wrong!!!</p>);

  if (!isLoading && !isError && singleNews.id) {
    singleNewsContent = <SingleNews news={singleNews} />;
  }

  return (
    <div className="grid grid-cols-12 gap-4 mt-[30px]">
      <div className="col-span-9">
        {singleNewsContent}
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
