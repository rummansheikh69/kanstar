import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Navbar() {
  return (
    <div className=" absolute z-50 top-0 left-0 right-0 w-full">
      <div className=" w-full px-5 h-14 pt-3 flex items-center justify-between">
        <div className=" flex items-center gap-2 md:gap-4">
          <div className=" w-10 h-10 ">
            <img
              src="images/logo.png"
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <span className=" text-white font-semibold text-base md:text-2xl mt-1">
            $GLORBZ
          </span>
        </div>
        <div className=" flex items-center gap-2 md:gap-4">
          <a
            href="https://letsbonk.fun/token/D2nxAYxGc1W9VonYZ794ydoftW6GuccN6bn7eahsbonk"
            className=" text-white text-sm font-semibold"
          >
            CA
          </a>
          <a href="" className=" text-white text-sm font-semibold">
            ABOUT US
          </a>
        </div>
        <div className=" flex items-center gap-2 md:gap-4">
          <a
            href="https://x.com/kanstarsolana"
            target="_blank"
            className=" text-white font-semibold"
          >
            <FaTwitter className=" w-6 h-6 hover:text-zinc-200" />
          </a>
          <a
            href="https://x.com/i/communities/1945288692542922955"
            target="_blank"
            className=" text-white font-semibold"
          >
            <FaXTwitter className=" w-6 h-6 hover:text-zinc-200" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
