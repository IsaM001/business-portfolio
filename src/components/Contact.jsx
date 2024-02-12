import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="w-full h-full bg-[#0B3948] p-6 md:p-20 text-[#ccd6f6]">
        <div className="flex items-center justify-center p-4">
          <form
            method="POST"
            action="https://getform.io/f/aa563479-e88c-4796-9431-fed766648669"
            className="flex flex-col max-w-[600px] w-full "
          >
            <div className="pb-8">
              <h2 className="inline-block mt-20 mb-6 text-4xl font-bold border-b-4">
                Contact
              </h2>
              <p className="py-4 text-gray-300">
                Submit the form below or send me an email -{" "}
                <span className="font-bold">devwithisa@gmail.com</span>
              </p>
            </div>
            {/* {Form inputs go here} */}
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="my-2 p-2 bg-[#f4f3ee]  text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="my-2 p-2 bg-[#f4f3ee] text-black"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="my-2 p-2 bg-[#f4f3ee] text-black"
              required
            ></textarea>
            <button
              className="flex items-center  px-4 py-3 mx-auto my-8 text-[#FFFFFF] border-2 text-lg hover:bg-[#D9DBF1] hover:font-bold hover:cursor-pointer hover:text-[#0B3948] hover:shadow-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
