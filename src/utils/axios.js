import axios from "axios";

const instance = axios.create({
  baseURL: "https://news-portal-server-52bn.onrender.com",
});

export default instance;
