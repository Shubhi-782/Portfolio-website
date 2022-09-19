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
            <p>Hi, I'm shubham nice to meet you. Please look around.</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro, sequi quo non blanditiis ipsa asperiores voluptas. Veritatis commodi necessitatibus vitae laborum non impedit nostrum ex magnam, labore delectus sunt ea dolorum itaque architecto magni minus ullam nobis aut tempora voluptatem odit eveniet explicabo quidem! Dolor atque repellendus, possimus molestiae nam nemo! Dolorum, omnis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
