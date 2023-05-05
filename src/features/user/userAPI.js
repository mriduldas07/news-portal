import axios from "../../utils/axios";

export const getAllUser = async () => {
  const res = await axios.get("/user");
  return res.data;
};
