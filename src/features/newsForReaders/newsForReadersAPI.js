import axios, { headers } from "../../utils/axios";

export const getNewsForReaders = async (email) => {
  const res = await axios.get(`/get-user-reading`, headers());
  return res.data;
};
