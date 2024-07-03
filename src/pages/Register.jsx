import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../firebase.config";
import axiosIns from "../utils/axios";
import resetData from "../utils/resetData";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const registerUser = async (user) => {
    return await axiosIns.post("/user", user);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    await createUserWithEmailAndPassword(email, password);
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
      })
    );
    registerUser(data);
    navigate("/");
    resetData(setName, setEmail, setPassword, setImg, setImgUrl);
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleRegister}>
        <div className="w-full lg:w-[752px] h-[981px] bg-[#FFFFFF] border-[1px] border-[#FFFFFF] rounded-[5px] mx-auto lg:mt-[50px]">
          <h2 className="text-center font-semibold lg:text-[35px] text-[#403F3F] mt-7 lg:mt-[58px] mb-[10px]">
            Register your account
          </h2>
          <br />
          <div className="border-[1px] border-[#E7E7E7] w-[75%] mx-auto"></div>
          <div className="flex flex-col gap-[24px] mt-[50px]">
            <div className="flex flex-col gap-[15px] mx-auto">
              <label className="label_auth">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-5 w-full lg:w-[558px] h-[65px] bg-[#f3f3f3] rounded-md"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[15px] mx-auto">
              <label className="label_auth">Email</label>
              <input
                className="px-5 w-full lg:w-[558px] h-[65px] bg-[#f3f3f3] rounded-md"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[15px] mx-auto">
              <label className="label_auth">Password</label>
              <input
                className="px-5 w-full lg:w-[558px] h-[65px] bg-[#f3f3f3] rounded-md"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              className="text-[#FFFFFF] font-semibold text-[20px] cursor-pointer mx-auto px-28 lg:px-0 lg:w-[558px] h-[65px] bg-[#403F3F] rounded-[5px] mt-[15px]"
              type="submit"
              value="Register"
            />
          </div>
          <p className="text-center font-semibold text-[16px] text-[#706F6F] mt-[30px]">
            Already Have An Account ?{" "}
            <span
              className="liner cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
