import React from "react";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";

const Main = () => {
  return (
    <div name="main" className=" w-full h-screen bg-[#354259]">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-zinc-400">
        <p className=" text-[#B2A4FF]">Hi, My name is</p>
        <h1 className=" text-[#3AB0FF] font-bold text-4xl sm:text-7xl">Kumar Shubham</h1>
        <h2 className=" text-[#ABD9FF] font-bold text-4xl sm:text-7xl">I'm a Frontend web Developer.</h2>
        <p className="text-[#D9F8C4] py-4 mx-w-[700px]">
          I'm an Engineer who started a new journey to become a Frontend
          developer by self learning.
        </p>
        <div>
          <button className=" text-white group border-2 px-6 py-2 my-3 flex items-center hover:bg-[#B2A4FF] hover:border-[#B2A4FF] duration-300">
            View work
            <span>
            <HiArrowNarrowRight className=" group-hover:rotate-90 duration-300 ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
