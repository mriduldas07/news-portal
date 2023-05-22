import axios from "../../utils/axios";

export const getAllNews = async () => {
  const res = await axios.get("/news");
  return res.data;
};
export const addNews = async (data) => {
  const res = await axios.post("/news", data);
  return res.data;
};
