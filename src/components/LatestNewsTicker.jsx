import Ticker, { NewsTicker } from "nice-react-ticker";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LatestNewsTicker() {
  const news = useSelector((state) => state.news.news);
  const latestArr = news.slice(-5);
  return (
    <div>
      <div className="">
        <Ticker isNewsTicker={true} slideSpeed={80}>
          {latestArr.map((l) => (
            <Link to={`/news/${l._id}`} key={l._id}>
              <NewsTicker id={l._id} icon={l.image_url} title={l.title} />
            </Link>
          ))}
        </Ticker>
      </div>
    </div>
  );
}
