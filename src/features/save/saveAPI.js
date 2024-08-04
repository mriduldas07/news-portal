import axios from "../../utils/axios";

export const addSave = async (data) => {
  const res = await axios.post("/saved", data);
  return res.data;
};

export const getSavedNews = async () => {
  const res = await axios.get("/saved");
  return res.data;
};
