import React from "react";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import photo from "../assets/pfp.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-[#0B3948] p-6 md:p-20 text-[#ccd6f6]"
    >
      <div className="flex items-center justify-center p-4">
        <div className="flex flex-col max-w-[600px] w-full ">
          <div className="pb-8">
            <h2 className="inline-block mt-20 mb-6 text-4xl font-bold border-b-4">
              About Me
            </h2>
            <p className="mb-2">Learn more about me</p>
          </div>
          {/* container */}
          <div className="max-w-[600px] mx-auto bg-[#081f2b] p-8 rounded-md text-[#ccd6f6] shadow-md">
            <div className="flex flex-col items-center mb-4">
              <img
                src={photo}
                alt="Picture of me"
                className="w-[200px] h-[200px] rounded-full object-cover mb-2 border-4 border-[#b9c4ca]"
              />

              <div className="flex justify-around">
                <a
                  href="https://www.linkedin.com/in/isa-mohammed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 ease-in-out hover:bg-[#2c3d4f] p-2 rounded-full "
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCCRXhh1Q4YTaJ8Q8uYQJUcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 ease-in-out hover:bg-[#2c3d4f] p-2 rounded-full"
                >
                  <FaYoutube size={30} />
                </a>
                <a
                  href="https://github.com/IsaM001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 ease-in-out hover:bg-[#2c3d4f] p-2 rounded-full"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <p className="mb-4 text-md text-start">
              Reliability, a strong work ethic, and a passion for continuous
              learning define my journey in the tech world. With a solid
              background in technology, I'm committed to delivering high-quality
              work. Explore more about my experiences and expertise below. Let's
              connect and build something extraordinary together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
