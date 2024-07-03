import axios from "axios";

const instance = axios.create({
  baseURL: "https://news-portal-serrver.vercel.app",
});

export default instance;
