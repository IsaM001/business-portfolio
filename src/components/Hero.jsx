import React from "react";
import { ReactTyped } from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0B3948] p-6 md:p-20 text-white"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <h1 className="mb-4   text-[#ccd6f6] text-4xl font-bold sm:text-5xl lg:text-6xl md:mb-6">
          <ReactTyped
            strings={[
              "Crafting Digital Experiences",
              "Passionate Tech Enthusiast",
              "Web Development Explorer",
              // Add more as needed
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </h1>
        <p className="mb-4 lg:text-xl sm:texl-sm font-bold md:mb-6 text-[#FFFFFF] ">
          Delving into the world of web development and passionate about
          crafting digital experiences. Whether you have questions about
          frontend technologies, need coding assistance, or dream of a unique
          online presence, I'm here to bring your ideas to life. Let's
          collaborate and build something extraordinary together!
        </p>
        <div className="my-4">
          <Link to="services" smooth={true} duration={500}>
            <button className="flex items-center px-6 py-3 border-2 text-[#FFFFFF]  text-lg hover:bg-[#D9DBF1] hover:font-bold hover:cursor-pointer hover:text-[#0B3948] hover:shadow-lg">
              Click me{" "}
              <span className="duration-300 hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
