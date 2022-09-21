import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen text-gray-300 bg-[#354259]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-[#B2A4FF]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-4xl font-bold">
            <p>Hi, I'm Shubham nice to meet you. Please look around to see my work & all the technologies i've learned and a small description about my journey.</p>
          </div>
          <div>
            <p className=" text-2xl">Thank you for visiting my portfolio website. I made this website by my own by learning skills. I completed my B.tech in mechanical engineering & after that i started working in mechanical industry as a Design Engineer but i always had interest in Computer science but got into mechanical sector because of someone's bad advice but now i've decided to follow my interest & i started learning Front-end web development because i think this is the best way to start my journey. I am very passionate about this line of work & looking forward to become a Full-stack developer some day. I am a type of person who likes to learn new things & can give my 100% or more for my goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
