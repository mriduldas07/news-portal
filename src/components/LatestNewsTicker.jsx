import React from "react";
import Ticker, { NewsTicker } from "nice-react-ticker";
import { useSelector } from "react-redux";
import { _author_date_split } from "../utils/_utlities_function";
import { Link } from "react-router-dom";

export default function LatestNewsTicker() {
  const news = useSelector((state) => state.news.news);
  const latestArr = news.slice(-5);
  return (
    <div>
      <div className="">
        <Ticker isNewsTicker={true} slideSpeed={80}>
          {latestArr.map((l) => (
            <Link to={`/news/${l.id}`} key={l.id}>
              <NewsTicker id={l.id} icon={l.image_url} title={l.title} />
            </Link>
          ))}
        </Ticker>
      </div>
    </div>
  );
}
