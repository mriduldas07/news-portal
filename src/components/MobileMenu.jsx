import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../firebase.config";

export default function MobileMenu() {
  const [user] = useAuthState(auth);
  const handlesignOut = () => {
    signOut(auth);
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="w-[150px] rounded-lg bg-[url('/assets/bg.png')] absolute ">
      <div className="flex flex-col items-center gap-3 pt-[20px] pb-5">
        <Link className="text-white" to="/">
          Home
        </Link>
        <Link className="text-white" to="/">
          About
        </Link>
        <Link className="text-white" to="/">
          Career
        </Link>
        {user ? (
          <Link className="text-white" to="/login">
            <div className="flex items-center gap-1">
              Logout{" "}
              <FiLogOut
                size={30}
                className="cursor-pointer"
                onClick={handlesignOut}
              />
            </div>
          </Link>
        ) : (
          <Link className="text-white" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
