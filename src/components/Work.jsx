import React from "react";
import tabIMG from "../assets/tab.png";
import clockIMG from "../assets/clock.png";
import heartIMG from "../assets/Heart.png";
import spotifyIMG from "../assets/spotify.png";
import chracterIMG from "../assets/chracter.png";
import blogIMG from "../assets/blog.png";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#354259] text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#B2A4FF]">
            Work
          </p>
          <p className=" py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${tabIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Tab section
              </span>
              <div className=" pt-8 text-center">
                <a href="https://github.com/Shubhi-782/Tab-section">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shubhi-782/Tab-section">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${clockIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Digital clock
              </span>
              <div className=" pt-8 text-center">
                <a href="https://github.com/Shubhi-782/projects_Digital-clock/tree/master">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shubhi-782/projects_Digital-clock/tree/master">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${heartIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Heart trail animation
              </span>
              <div className=" pt-8 text-center">
                <a href="https://github.com/Shubhi-782/Heart-trail-aimation">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shubhi-782/Heart-trail-aimation">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${spotifyIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Spotify page
              </span>
              <div className=" pt-8 text-center">
                <a href="https://github.com/Shubhi-782/spotify-page">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shubhi-782/spotify-page">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${chracterIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Real time character count
              </span>
              <div className=" pt-8 text-center">
                <a href="https://github.com/Shubhi-782/Real-time-chracter-counter">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shubhi-782/Real-time-chracter-counter">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${blogIMG})` }}
            className=" shadow-lg shadow-[#16213E] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover effects */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Blog site
              </span>
              <div className=" pt-8 text-center">
                <a href="https://github.com/Shubhi-782/Blog-page">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Shubhi-782/Blog-page">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
