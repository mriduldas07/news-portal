import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";
import EditorsRelated from "./EditorsRelated";

export default function RelatedEditor() {
  const { singleNews } = useSelector((state) => state.singleNews);
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const authorReleted = news?.filter(
    (n) => n?.author?._id == singleNews?.author?._id
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className="mt-[30px] mb-[100px]">
      <h3 className="font-semibold text-[25px] text-[#403F3F] text-center">
        Editors Insight
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-[20px] px-10">
        {authorReleted?.map((a) => (
          <EditorsRelated key={a._id} news={a} />
        ))}
      </div>
    </div>
  );
}
