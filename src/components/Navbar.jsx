import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiSolidCategory } from "react-icons/bi";
import { BsMenuButtonWide } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import CategoryModal from "./CategoryModal";
import MobileMenu from "./MobileMenu";
import UserModal from "./UserModal";

export default function Navbar() {
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handlesignOut = () => {
    signOut(auth);
    localStorage.clear();
    navigate("/login");
  };

  const handleManuber = () => {
    setOpenUserModal(!openUserModal);
  };
  const handleMobileManuber = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const handleCategoryManuber = () => {
    setOpenCategoryMenu(!openCategoryMenu);
  };

  return (
    <div className="mt-[34px] flex justify-between items-center px-5">
      <div className="block lg:hidden">
        <BiSolidCategory size={35} onClick={handleCategoryManuber} />
        {openCategoryMenu && (
          <div className="relative top-1">
            <CategoryModal />
          </div>
        )}
      </div>
      <div className="block lg:hidden">
        <BsMenuButtonWide size={30} onClick={handleMobileManuber} />
        {openMobileMenu && (
          <div className="relative top-1 end-36">
            <MobileMenu />
          </div>
        )}
      </div>

      <ul className="hidden lg:flex justify-center items-center text-center lg:pl-[8.5rem]">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>About</li>
        <li>Career</li>
      </ul>
      <div className="hidden lg:flex justify-end items-center lg:mt-[-2rem]">
        {user && (
          <img
            src={user?.photoURL}
            className="mr-[9px] cursor-pointer w-[41px] h-[41px] rounded-full"
            alt="profile"
            onClick={handleManuber}
          />
        )}
        {openUserModal ? (
          <div className="relative top-5 end-40">
            <UserModal />
          </div>
        ) : (
          ""
        )}
        {user ? (
          <div className="flex justify-center items-center gap-5">
            <h6>{user?.displayName}</h6>
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
