// Inside ServiceModal.jsx
import React from "react";

const ServiceModal = ({ isOpen, onClose, title, content }) => {
  const handleContactClick = () => {
    // Replace 'your@email.com' with your actual email address
    window.location.href = `mailto:devwithisa@gmail.com?subject=Inquiry%20about%20${title}`;
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 md:p-8 bg-[#0B3948] rounded-md text-white max-w-md w-full">
            <h3 className="mb-4 text-xl font-bold text-center">{title}</h3>
            <p>{content}</p>
            <div className="flex flex-col mt-4 space-y-4">
              <button
                onClick={onClose}
                className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={handleContactClick}
                className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-full hover:bg-gray-400"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceModal;
