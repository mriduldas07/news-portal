import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "https://news-portal-serrver.vercel.app",
  headers: {
    authorization: token,
  },
});

export default instance;

export const headers = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return {
    headers: {
      authorization: token,
    },
  };
};

// https://news-portal-serrver.vercel.app
// http://localhost:8000
