import axios from "../../utils/axios";

export const getAllNews = async () => {
  const res = await axios.get("/news");
  return res.data;
};
