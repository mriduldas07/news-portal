import React, { useEffect } from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import NewsContainer from "../components/NewsContainer";
import { fetchCategories } from "../features/category/categorySlice";
import { fetchNews } from "../features/news/newsSlice";
import { auth } from "../firebase.config";

export default function Home() {
  const dispatch = useDispatch();
  const [updateProfile] = useUpdateProfile(auth);

  const localData = localStorage.getItem("user");
  const parsedData = JSON.parse(localData);
  const { name, img } = parsedData || {};

  useEffect(() => {
    updateProfile({ displayName: name, photoURL: img });
    dispatch(fetchNews());
    dispatch(fetchCategories());
  }, [name, img, dispatch]);

  return (
    <div>
      <Latest />
      <Navbar />
      <NewsContainer />
    </div>
  );
}
