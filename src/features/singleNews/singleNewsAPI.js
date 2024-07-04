import axios, { headers } from "../../utils/axios";

const token = localStorage.getItem("token");

export const getSingleNews = async (id) => {
  const res = await axios.get(`/news/${id}`, headers());
  return res.data;
};
