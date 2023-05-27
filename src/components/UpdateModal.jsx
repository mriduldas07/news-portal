import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { changeNews, editInActive } from "../features/news/newsSlice";
import resetData from "../utils/resetData";
import { useNavigate } from "react-router-dom";

export default function UpdateModal() {
  const { editing } = useSelector((state) => state.news);
  const { rating, total_view, author, image_url } = editing || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState("");

  useEffect(() => {
    const { id, title, category, details, others_info } = editing || {};
    const { is_trending } = others_info || {};
    if (id) {
      setTitle(title);
      setCategory(category);
      setDetails(details);
      setChecked(is_trending);
    }
  }, [editing]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeNews({
        id: editing?.id,
        data: {
          others_info: {
            is_trending: checked,
          },
          category,
          rating: rating?.number,
          total_view,
          title,
          author: {
            name: author?.name,
            published_date: author?.published_date,
            img: author.img,
            email: author.email,
          },
          image_url: image_url,
          details,
        },
      })
    );
    confirm("Want to update this news?");
    resetData(setTitle, setCategory, setChecked, setDetails);
    navigate("/dashboard");
  };

  const handleCancel = () => {
    confirm("Want to cancel this news to update?");
    dispatch(editInActive());
    resetData(setTitle, setCategory, setChecked, setDetails);
    navigate("/dashboard");
  };
  return (
    <>
      <Navbar />
      <div className="w-[900px] min-h-screen mx-auto">
        <div className="flex justify-center items-center h-[600px] my-10 bg-slate-100 rounded-md">
          <form className=" mt-5" onSubmit={handleUpdate}>
            <div className="flex justify-center items-center">
              <div className="w-[500px]">
                <input
                  type="text"
                  name="title"
                  value={title}
                  className="border-[3px] border-[#666565] rounded py-2 px-5"
                  placeholder="News Title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <select
                name="category"
                value={category}
                id="category"
                placeholder="News Category"
                className="border-[3px] border-[#666565] rounded py-2 px-5"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Choose one</option>
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
                value={details}
                cols="48"
                rows="8"
                placeholder="News Details..."
                className="border-[3px] border-[#666565] rounded py-2 px-5 mt-5"
                required
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <input
                type="checkbox"
                checked={checked}
                name=""
                onChange={() => setChecked(!checked)}
              />
              <p>This News is Trending</p>
            </div>
            <div className="flex justify-center items-center my-5 bg-[#3c3cbe] w-1/2 mx-auto py-[10px] rounded-sm text-white cursor-pointer">
              <input
                type="submit"
                value="Update News"
                className="cursor-pointer"
              />
            </div>
            <div
              className="flex justify-center items-center my-5 bg-[#d42727] w-1/2 mx-auto py-[10px] rounded-sm text-white cursor-pointer"
              onClick={handleCancel}
            >
              <input type="submit" value="Cancel" className="cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
