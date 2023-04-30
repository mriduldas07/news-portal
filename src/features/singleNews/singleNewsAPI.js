import axios from "../../utils/axios";

export const getSingleNews = async (id) => {
  const res = await axios.get(`/news/${id}`);
  return res.data;
};
