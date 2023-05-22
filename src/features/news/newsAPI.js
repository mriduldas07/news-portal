import axios from "../../utils/axios";

export const getAllNews = async () => {
  const res = await axios.get("/news");
  return res.data;
};
export const addNews = async (data) => {
  const res = await axios.post("/news", data);
  return res.data;
};

export const updateNews = async (id, data) => {
  const res = await axios.put(`/news/${id}`, data);
  return res.data;
};

export const deleteNews = async (id) => {
  const res = await axios.delete(`/news/${id}`);
  return res.data;
};
