import axios from "../../utils/axios";

export const getAllCategories = async () => {
  const res = await axios.get("/all-category");
  return res.data;
};
// export const addNews = async (data) => {
//   const res = await axios.post("/news", data);
//   return res.data;
// };
