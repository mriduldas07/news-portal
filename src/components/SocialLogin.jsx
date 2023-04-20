import React from "react";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/all";

export default function SocialLogin() {
  return (
    <div className="w-[273px] h-[134px]">
      <h3 className="font-semibold text-[20px] text-[#403F3F]">Login With</h3>
      <div className="flex justify-center items-center gap-2 border-[3px] border-[#8383f7] py-[5px] px-[20px] rounded-lg mt-5 cursor-pointer">
        <AiOutlineGoogle size={23} color="#8383f7" />
        <span className="text-[#8383f7]">Login with Google</span>
      </div>
      <div className="flex justify-center items-center gap-2 border-[3px] border-[#504d4d] py-[5px] px-[20px] rounded-lg mt-2 cursor-pointer">
        <AiFillGithub size={20} />
        <span>Login with Github</span>
      </div>
    </div>
  );
}
