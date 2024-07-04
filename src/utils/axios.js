import axios from "axios";

const instance = axios.create({
  baseURL: "https://news-portal-serrver.vercel.app",
});

export default instance;

export const headers = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      authorization: token,
    },
  };
};

// https://news-portal-serrver.vercel.app
// http://localhost:8000
