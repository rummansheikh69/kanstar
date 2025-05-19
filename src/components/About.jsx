import React from "react";

function About() {
  return (
    <div className="w-full border-b-4 border-black">
      <div className=" w-full py-8 border-b-4 border-black">
        <h1 className="text-center text-3xl md:text-7xl font-asthetic text-zinc-800 font-medium ">
          DISCOVR THE KANSTARWORLD
        </h1>
      </div>
      <div className=" w-full bg-[#A17DB3] ">
        <div className="px-10  md:px-40">
          {/* texts */}
          <div className=" w-full  py-14 flex flex-col justify-center ">
            {/* firsttext  */}
            <div className=" flex  items-center text-[#ECE8D7] leading-3">
              <span className=" text-8xl font-medium font-asthetic   -rotate-6  text-stroke-4">
                W
              </span>
              <span className=" text-[85px]  font-medium font-asthetic   ml-1 -rotate-6  text-stroke-4">
                H
              </span>
              <span className=" text-[110px]  font-medium font-asthetic -mt-2  ml-1 -rotate-6  text-stroke-4">
                O?
              </span>
              <span className=" text-[85px]  font-medium font-asthetic -mt-2  ml-5 -rotate-6  text-stroke-4">
                W
              </span>
              <span className=" text-[100px]  font-medium font-asthetic -mt-2  ml-1 -rotate-6  text-stroke-4">
                H
              </span>
              <span className=" text-[115px]  font-medium font-asthetic -mt-2  ml-1 -rotate-6  text-stroke-4">
                A
              </span>
              <span className=" text-[115px]  font-medium font-asthetic -mt-2  ml-1 -rotate-6  text-stroke-4">
                T?
              </span>
            </div>

            {/* middle text  */}
            <div className=" flex items-center text-[#ECE8D7] md:ml-20 leading-none">
              <span className=" text-8xl  font-medium font-asthetic   -rotate-6  text-stroke-4 tracking-wider">
                Is
              </span>
              <span className=" text-[115px] font-medium font-asthetic ml-5 -rotate-2  text-stroke-4 tracking-wider">
                A
              </span>
            </div>
            {/* last text  */}
            <div className=" flex items-center text-[#ECE8D7]  leading-3">
              <span className=" text-9xl  font-medium font-asthetic   -rotate-6  text-stroke-4 tracking-wider">
                K
              </span>
              <span className=" text-9xl  font-medium font-asthetic   -rotate-5  text-stroke-4 tracking-wider">
                A
              </span>
              <span className=" text-9xl  font-medium font-asthetic   -rotate-5  text-stroke-4 tracking-wider">
                N
              </span>
              <span className=" text-9xl  font-medium font-asthetic   -rotate-5  text-stroke-4 tracking-wider">
                S
              </span>
              <span className=" text-9xl  font-medium font-asthetic   -rotate-6  text-stroke-4 tracking-wider">
                T
              </span>
              <span className=" text-9xl  font-medium font-asthetic   -rotate-6  text-stroke-4 tracking-wider">
                A
              </span>
              <span className=" text-9xl  font-medium font-asthetic   -rotate-2  text-stroke-4 tracking-wider">
                R
              </span>
              <span className=" text-9xl  font-medium font-asthetic  ml-14 text-[#98ED1D] -mt-5  -rotate-12  text-stroke-4 tracking-wider">
                ?
              </span>
              <span className=" text-9xl  font-medium font-asthetic  ml-1 text-[#98ED1D] -mt-5  -rotate-1  text-stroke-4 tracking-wider">
                ?
              </span>
              <span className=" text-9xl  font-medium font-asthetic  ml-1 text-[#98ED1D] -mt-5  rotate-6  text-stroke-4 tracking-wider">
                ?
              </span>
            </div>
          </div>
          {/* about */}
          <div className=" w-full py-5">
            <div className=" md:grid grid-cols-12 gap-4">
              <div className="  text-zinc-50 text-3xl col-span-7">
                <p>
                  A vibrant “cosmic good-boy” NFT collection powering a whole
                  gamified ecosystem on Ronin—think lovable mascot + community
                  badge + growth engine all rolled into one.
                </p>
                <br />
                <p>
                  Holders unlock merch royalties, creator-education perks, early
                  game playtests & airdrops, special roles in KIND’s galaxy, and
                  future revenue share from Kanstar-branded games, toys, and
                  even eco-lodge tokenization.
                </p>
              </div>
              <div className=" w-full  col-span-5">
                <div className=" w-full h-full">
                  <img
                    src="images/rocket.webp"
                    alt="Rocket"
                    className=" w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* about */}
          <div className=" w-full pt-5 pb-10">
            <div className=" md:grid grid-cols-12 gap-4 place-content-center">
              <div className="  col-span-7">
                <div className=" w-full h-80">
                  <img
                    src="images/planet.webp"
                    alt="Rocket"
                    className=" w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="   col-span-5 content-center">
                <h1 className=" text-8xl text-[#ECE8D7] font-asthetic text-center tracking-[0.06em] text-stroke-3">
                  THERE'S
                </h1>
                <h1 className=" text-8xl text-[#ECE8D7] font-asthetic text-center text-stroke-3">
                  MORE TO
                </h1>
                <h1 className=" text-8xl text-[#ECE8D7] font-asthetic text-center text-stroke-3">
                  KANSTAR
                </h1>
                <button className=" hover:scale-90 transition-all w-full py-2 button-shadow bg-[#ECE8D7] border border-black rounded-full font-medium">
                  <a href="https://t.me/kanstarsolana" target="_blank">
                    Whitepaper Coming Soon
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
