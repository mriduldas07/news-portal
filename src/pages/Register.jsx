import React from "react";
import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <div>
      <Navbar />
      <form>
        <div className="w-[752px] h-[781px] bg-[#FFFFFF] border-[1px] border-[#FFFFFF] rounded-[5px] mx-auto mt-[50px]">
          <h2 className="text-center font-semibold text-[35px] text-[#403F3F] mt-[58px] mb-[10px]">
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
                className="input_auth"
              />
            </div>
            <div className="flex flex-col gap-[15px] mx-auto">
              <label className="label_auth">Photo</label>
              <input
                className="input_auth"
                type="file"
                placeholder="Enter a photo"
              />
            </div>
            <div className="flex flex-col gap-[15px] mx-auto">
              <label className="label_auth">Email</label>
              <input
                className="input_auth"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-[15px] mx-auto">
              <label className="label_auth">Password</label>
              <input
                className="input_auth"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-center items-center gap-[15px] mx-auto w-[558px] h-[65px] bg-[#403F3F] rounded-[5px] mt-[15px] cursor-pointer">
              <input
                className="text-[#FFFFFF] font-semibold text-[20px] cursor-pointer"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
