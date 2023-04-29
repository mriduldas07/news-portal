import React, { useEffect } from "react";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import NewsContainer from "../components/NewsContainer";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";

export default function Home() {
  const [updateProfile] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  console.log(user);

  const localData = localStorage.getItem("user");
  const parsedData = JSON.parse(localData);
  const { name, img } = parsedData || {};

  useEffect(() => {
    updateProfile({ displayName: name, photoURL: img });
  }, [name, img]);

  // const profile = async () => {
  //   await updateProfile({ displayName: name, photoURL: img });
  // };

  // useEffect(() => {
  //   profile();
  // }, [name, img]);

  return (
    <div>
      <Latest />
      <Navbar />
      <NewsContainer />
    </div>
  );
}
