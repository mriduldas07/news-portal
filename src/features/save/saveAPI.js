import axios from "../../utils/axios";

export const addSave = async (data) => {
  const res = await axios.post("/saved", data);
  return res.data;
};

export const getSave = async (email) => {
  const res = await axios.get(`/user?email_like=${email}&&_embed=saved`);
  return res.data;
};
