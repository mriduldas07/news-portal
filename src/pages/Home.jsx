import React, { useEffect } from "react";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import NewsContainer from "../components/NewsContainer";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { useDispatch } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [updateProfile] = useUpdateProfile(auth);

  const localData = localStorage.getItem("user");
  const parsedData = JSON.parse(localData);
  const { name, img } = parsedData || {};

  useEffect(() => {
    updateProfile({ displayName: name, photoURL: img });
    dispatch(fetchNews());
  }, [name, img, dispatch]);

  return (
    <div>
      <Latest />
      <Navbar />
      <NewsContainer />
    </div>
  );
}
