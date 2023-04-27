import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handlesignOut = () => {
    signOut(auth);
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="mt-[34px]">
      <ul className="flex justify-center items-center text-center w-[1000px] pl-[8.5rem]">
        <li>Home</li>
        <li>About</li>
        <li>Career</li>
      </ul>
      <div className="flex justify-end items-center mt-[-2rem]">
        <img src="/assets/profile.png" className="mr-[9px]" alt="profile" />
        {user ? (
          <div className="flex justify-center items-center gap-5">
            <h6>{user.displayName}</h6>
            <FiLogOut
              size={30}
              className="cursor-pointer"
              onClick={handlesignOut}
            />
          </div>
        ) : (
          <p
            className="w-[140px] h-[44px] bg-[#403F3F] flex justify-center items-center font-semibold text-[20px] text-[#FFFFFF] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </p>
        )}
      </div>
    </div>
  );
}
