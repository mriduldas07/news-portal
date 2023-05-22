import React, { useEffect, useRef, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";

export default function Profile() {
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const { email, photoURL } = user || {};

  const submitForm = (e) => {
    e.preventDefault();
    const CLIENT_API_KEY = "41638383b537c533d6c237f313e5cf71";
    const imgURL = e.target.img.files[0];

    const formData = new FormData();
    formData.append("image", imgURL);
    const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          updateProfile({ photoURL: img });
        }
      });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="flex flex-col items-center mt-[50px]">
          <img
            src={photoURL}
            alt=""
            className="w-[200px] h-[200px] rounded-full"
          />
          <div className="mt-[35px]">
            <input
              type="file"
              name="img"
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-md file:font-semibold
              file:bg-violet-50 file:text-[#3c3cbe]
              hover:file:bg-violet-200 my-5 cursor-pointer"
            />
            <div className="bg-[#3c3cbe] text-white px-[40px] py-[10px] text-[18px] cursor-pointer text-center">
              <input
                type="submit"
                className="cursor-pointer"
                value="Upload Image"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <input
              type="email"
              value={email}
              disabled
              className="border rounded-sm py-[5px] px-[20px] text-center"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
