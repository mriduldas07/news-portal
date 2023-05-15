import axios from "../../utils/axios";

export const getNewsForEmail = async (email) => {
  const res = await axios.get(`/news?author.email_like=${email}`);
  return res.data;
};
