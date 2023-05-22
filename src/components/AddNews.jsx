import React, { useState } from "react";
import { auth } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { _date_time_maker } from "../utils/_utlities_function";
import { createNews } from "../features/news/newsSlice";
import resetData from "../utils/resetData";
import { useDispatch } from "react-redux";

export default function AddNews() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Breaking_News");
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState(false);
  const [user] = useAuthState(auth);
  const { email, displayName, photoURL } = user || {};

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    const CLIENT_API_KEY = "41638383b537c533d6c237f313e5cf71";
    const imgUrl = e.target.newsImg.files[0];

    const formData = new FormData();
    formData.append("image", imgUrl);
    const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const data = {
            others_info: {
              is_trending: checked,
            },
            category,
            rating: {
              number: 0,
            },
            total_view: 0,
            title,
            author: {
              name: displayName,
              published_date: `${_date_time_maker(
                date.getFullYear()
              )}-${_date_time_maker(date.getMonth())}-${_date_time_maker(
                date.getDate()
              )} ${_date_time_maker(date.getHours())}:${_date_time_maker(
                date.getMinutes()
              )}:${_date_time_maker(date.getSeconds())}`,
              img: photoURL,
              email,
            },
            image_url: img,
            details,
          };
          console.log(data);
          confirm("You Want To Add News?") && dispatch(createNews(data));
          resetData(setTitle, setCategory, setChecked, setDetails);
        }
      });
    e.target.reset();
  };
  return (
    <div className="my-10">
      <h1 className="text-center text-3xl text-semibold mb-8">
        Publish Your News
      </h1>
      <form className=" mt-5" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div className="w-[500px]">
            <input
              type="text"
              name="title"
              className="border-[3px] border-[#666565] rounded py-2 px-5"
              placeholder="News Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <select
            name="category"
            placeholder="News Category"
            className="border-[3px] border-[#666565] rounded py-2 px-5"
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Breaking_News">Breaking_News</option>
            <option value="International_News">International_News</option>
            <option value="Regular_News">Regular_News</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Arts">Arts</option>
          </select>
        </div>
        <div className="flex justify-center">
          <textarea
            name="details"
            cols="48"
            rows="8"
            placeholder="News Details..."
            className="border-[3px] border-[#666565] rounded py-2 px-5 mt-5"
            required
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <span>News Image</span>
          <input
            type="file"
            name="newsImg"
            className="block text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-lg   file:font-semibold
              file:bg-violet-50 file:text-[#3c3cbe]
              hover:file:bg-violet-200 my-5 cursor-pointer"
            required
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            name=""
            onChange={() => setChecked(!checked)}
          />
          <p>This News is Trending</p>
        </div>
        <h1 className="text-center my-5">Author Details</h1>
        <div className="flex justify-center items-center flex-col gap-3">
          <input
            type="text"
            name="author_name"
            className="border-[3px] border-[#666565] rounded py-2 px-5"
            value={displayName}
            disabled
          />
          <input
            type="email"
            name="author_email"
            className="border-[3px] border-[#666565] rounded py-2 px-5"
            value={email}
            disabled
          />
        </div>
        <div className="flex justify-center items-center my-5 bg-[#3c3cbe] w-1/2 mx-auto py-[10px] rounded-sm text-white cursor-pointer">
          <input type="submit" value="Add News" className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
}
