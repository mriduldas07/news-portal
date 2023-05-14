import React, { useEffect } from "react";
import RelaltedNews from "./RelaltedNews";
import EditorsRelated from "./EditorsRelated";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";

export default function RelatedEditor() {
  const { singleNews } = useSelector((state) => state.singleNews);
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const authorReleted = news?.filter(
    (n) => n?.author?.name == singleNews?.author?.name
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className="mt-[30px] mb-[100px]">
      <h3 className="font-semibold text-[25px] text-[#403F3F]">
        Editors Insight
      </h3>
      <div className="grid grid-cols-3 mx-auto gap-[20px] mt-[20px]">
        {authorReleted?.map((a) => (
          <EditorsRelated key={a.id} news={a} />
        ))}
      </div>
    </div>
  );
}
