import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <div className=" w-full bg-[#A17DB3] mt-32 border-t-4 border-black">
      <div className=" px-10 md:px-40 py-5 text-white">
        <div className=" flex items-center justify-between">
          <p>© {new Date().getFullYear()} $GLORBZ</p>
          <div className=" flex items-center gap-4">
            <a href="https://x.com/kanstarsolana" target="_blank">
              <FaTwitter className=" w-6 h-6" />
            </a>

            <a href="https://x.com/i/communities/1945288692542922955" target="_blank">
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
