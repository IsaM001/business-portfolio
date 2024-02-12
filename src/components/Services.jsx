// Services.jsx
import React, { useState } from "react";
import cardImage1 from "../assets/cardImage1.jpg";
import cardImage3 from "../assets/cardImage3.jpg";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      name="services"
      className="w-full h-full bg-[#0B3948] p-6 md:p-20 text-[#ccd6f6]"
    >
      <div className="flex items-center justify-center p-4">
        <div className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <h2 className="inline-block mt-20 mb-6 text-4xl font-bold text-center border-b-4">
              Services
            </h2>
            <p className="mb-2">
              Take a look at the services that I currently offer
            </p>
          </div>
          {/* Services container */}
          <div className="flex flex-col items-center justify-evenly">
            {/* Card 1 */}
            <div className="w-full bg-[#081f2b] p-8 rounded text-[#ccd6f6] shadow-md mb-8 text-center">
              <h3 className="inline-block mb-4 text-xl font-bold border-b-2">
                Website creation
              </h3>
              <div className="w-full mb-4 overflow-hidden rounded">
                <img
                  src={cardImage1}
                  alt="Service 1"
                  className="object-cover lg:w-[300px] lg:h-[300px] sm:w-full sm:h-full md:w-full md:h-full mx-auto"
                />
              </div>
              <p className="mb-4 text-md">
                Need a portfolio? Want to create a landing page? Or maybe you
                want to turn your dream website into a reality. Click below to
                learn more!
              </p>
              <button
                onClick={() =>
                  openModal(
                    "Website creation",
                    "Passionate about UX/UI design, I am dedicated to crafting experiences that captivate users and elevate your brand. With a keen eye for detail, I ensure your design not only looks stunning but functions flawlessly across all devices. Your satisfaction is my priority, and all of this comes at a competitive price. Ready to bring your vision to life? Let's create something extraordinary together—reach out today!"
                  )
                }
                className="bg-[#ccd6f6] hover:bg-white text-black font-semibold hover:text-[#081f2b] hover:font-bold transition-all duration-300 py-2 px-4 rounded-full mx-auto flex justify-center"
              >
                Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-[#081f2b] p-8 rounded text-[#ccd6f6] shadow-md mb-8 text-center">
              <h3 className="inline-block mb-4 text-xl font-bold border-b-2">
                Coding help
              </h3>
              <div className="w-full mb-4 overflow-hidden rounded">
                <img
                  src={cardImage3}
                  alt="Service 3"
                  className="object-cover lg:w-[300px] lg:h-[300px] sm:w-full sm:h-full md:w-full md:h-full mx-auto"
                />
              </div>
              <p className="mb-4 text-md">
                Need assistance with your code? Having trouble figuring out why
                your application isn't working? Reach out for help. Click below
                to learn more!
              </p>
              <button
                onClick={() =>
                  openModal(
                    "Coding help",
                    "Stuck in a code maze? Don't worry! I'm here to help you unravel it—for free! Sometimes, a fresh perspective is all it takes to crack the code. If you find our collaboration beneficial and want ongoing support, we can discuss a reasonable arrangement that suits your needs. Let's turn your coding challenges into victories together!"
                  )
                }
                className="bg-[#ccd6f6] text-black font-semibold hover:bg-white hover:text-[#081f2b] hover:font-bold transition-all duration-300 py-2 px-4 rounded-full mx-auto flex justify-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render Modal */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
      />
    </div>
  );
};

export default Services;
