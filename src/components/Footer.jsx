import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=" w-full bg-[#A17DB3] mt-32 border-t-4 border-black">
      <div className=" px-10 md:px-40 py-5 text-white">
        <div className=" flex items-center justify-between">
          <p>© {new Date().getFullYear()} KANSTARWORLD</p>
          <div className=" flex items-center gap-4">
            <a href="https://x.com/kanstarsolana" target="_blank">
              <FaTwitter className=" w-6 h-6" />
            </a>

            <a href="https://t.me/kanstarsolana" target="_blank">
              <FaTelegramPlane className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
