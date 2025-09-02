import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className=" relative">
      <Navbar />
      <div className=" w-full h-screen overflow-hidden relative">
        <div className=" absolute w-full h-1/2 top-0 bg-gradient-to-b from-black"></div>
        {/* bg video  */}
        <div className=" w-full h-full ">
          <video
            src="images/video.mp4"
            autoPlay
            loop
            muted
            className=" w-full h-full object-cover"
          ></video>
        </div>

        {/* title  */}
        <div className=" absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center">
          <h1 className=" text-2xl whitespace-nowrap md:text-4xl text-white font-asthetic text-stroke-3 ">
            WELCOME TO THE WORLD OF
          </h1>
          <h1 className=" text-6xl md:text-8xl text-white font-asthetic text-stroke-3 ">
            $HAB
          </h1>
        </div>

        {/* bottom line  */}
        <div className=" absolute bottom-0 z-50 w-full h-1 bg-black"></div>

        {/* images  */}
        <div className=" absolute bottom-0 left-0 right-0 flex justify-center">
          <div className=" flex -space-x-20 ">
            <div className=" md:w-80 md:h-80 w-24 h-24">
              <img
                src="images/cute1.png"
                className=" w-full h-full object-cover md:mt-20 mt-8 -ml-8 md:ml-0"
              />
            </div>
            <div className=" md:w-96 md:h-96 w-32 h-32">
              <img
                src="images/cute3.png"
                className=" w-full h-full object-cover mt-5"
              />
            </div>
            <div className=" md:w-96 z-20 md:h-96 w-32 h-32">
              <img
                src="images/cute4.png"
                className=" w-full h-full object-cover mt-5"
              />
            </div>
            <div className=" z-10 md:w-80 md:h-80  w-24 h-24">
              <img
                src="images/cute2.png"
                className=" w-full h-full object-cover md:mt-20 mt-8 ml-8 md:ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
