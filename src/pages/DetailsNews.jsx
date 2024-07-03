import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import QJone from "../components/QJone";
import RelatedEditor from "../components/RelatedEditor";
import SingleNews from "../components/SingleNews";
import SocialLogin from "../components/SocialLogin";
import SocialMedia from "../components/SocialMedia";
import {
  addAuthor,
  fetchSingleNews,
} from "../features/singleNews/singleNewsSlice";

export default function DetailsNews() {
  const { singleNews, isLoading, isError } = useSelector(
    (state) => state.singleNews
  );
  const dispatch = useDispatch();
  const { newsId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleNews(newsId));
    dispatch(addAuthor(singleNews.author?.name));
  }, [dispatch, newsId]);

  let singleNewsContent;
  if (isLoading) return (singleNewsContent = <p>Loading...</p>);
  if (!isLoading && isError)
    return (singleNewsContent = <p>Something went wrong!!!</p>);

  if (!isLoading && !isError && singleNews._id) {
    singleNewsContent = <SingleNews news={singleNews} />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-[30px] px-3 lg:w-fit">
      <div className="lg:col-span-9">
        {singleNewsContent}
        <div className="flex justify-center">
          <RelatedEditor />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-3">
        <SocialLogin />
        <SocialMedia />
        <QJone />
      </div>
    </div>
  );
}
