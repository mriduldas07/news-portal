import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../firebase.config";
import resetData from "../utils/resetData";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    resetData(setEmail, setPassword);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleLogin}>
        <div className="w-full lg:w-[752px] h-[781px] bg-[#FFFFFF] border-[1px] border-[#FFFFFF] rounded-[5px] mx-auto lg:mt-[50px]">
          <h2 className="text-center font-semibold lg:text-[35px] text-[#403F3F] mt-7 lg:mt-[58px] mb-[10px]">
            Login your account
          </h2>
          <br />
          <div className="border-[1px] border-[#E7E7E7] w-full lg:w-[75%] mx-auto"></div>
          <div className="flex flex-col gap-[24px] mt-[50px]">
            <div className="flex flex-col mx-auto">
              <label className="label_auth">Email Address</label>
              <input
                className="px-5 w-full lg:w-[558px] h-[65px] bg-[#f3f3f3] rounded-md"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-auto">
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
              value="Login"
            />
          </div>
          <p>{error}</p>
          <p className="text-center font-semibold text-[16px] text-[#706F6F] mt-[30px]">
            Dont’t Have An Account ?{" "}
            <span
              className="liner cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
