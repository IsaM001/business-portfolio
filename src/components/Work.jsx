import React, { useState } from "react";
import Uber from "../assets/Uber.jpg";
import IslamApp from "../assets/IslamApp.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-full bg-[#0B3948] p-6 md:p-20 text-[#ccd6f6]"
    >
      <div className="flex items-center justify-center p-4">
        <div className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <h2 className="inline-block mt-20 mb-6 text-4xl font-bold text-center border-b-4">
              Work
            </h2>
            <p className="mb-2">Take a look at some of my recent work</p>
          </div>
          {/* Services container */}
          <div className="flex flex-col items-center justify-evenly">
            {/* Card 1 */}
            <div className="w-full bg-[#081f2b] p-8 rounded text-[#ccd6f6] shadow-md mb-8 text-center">
              <h3 className="inline-block mb-4 text-2xl font-bold">
                Uber Eats
              </h3>
              <div className="w-full mb-4 overflow-hidden rounded">
                <img
                  src={Uber}
                  alt="Uber Eats"
                  className="object-cover lg:w-[300px] lg:h-[300px] sm:w-full sm:h-full md:w-full md:h-full mx-auto"
                />
              </div>
              <p className="mb-4 text-md">
                A fully responsive mockup of Uber Eats. You can sign up and log
                in. However, you can't order food. Check it out below.
              </p>
              <a
                href="https://isam001.github.io/uber-eats/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#ccd6f6] hover:bg-white text-black font-semibold hover:text-[#081f2b] hover:font-bold transition-all duration-300 py-2 px-4 rounded-full mx-auto flex justify-center">
                  View Project
                </button>
              </a>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-[#081f2b] p-8 rounded text-[#ccd6f6] shadow-md mb-8 text-center">
              <h3 className="inline-block mb-4 text-2xl font-bold ">
                Islam App
              </h3>
              <div className="w-full mb-4 overflow-hidden rounded">
                <img
                  src={IslamApp}
                  alt="Islam App"
                  className="object-cover lg:w-[300px] lg:h-[300px] sm:w-full sm:h-full md:w-full md:h-full mx-auto"
                />
              </div>
              <p className="mb-4 text-md">
                A multi-page responsive educational application with many
                features. Check it out below.
              </p>
              <a
                href="https://my-islam-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#ccd6f6] hover:bg-white text-black font-semibold hover:text-[#081f2b] hover:font-bold transition-all duration-300 py-2 px-4 rounded-full mx-auto flex justify-center">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
