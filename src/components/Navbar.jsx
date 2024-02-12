import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => setNav(!nav);

  const closeMobileMenu = () => setNav(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0B3948] text-[#ACB0BD] font-bold">
      <div style={{ marginRight: "20px" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "150px", cursor: "pointer" }}
        />
      </div>

      {/* Hamburger */}
      <div onClick={handleToggle} className="z-10 cursor-pointer md:hidden">
        {nav ? (
          <FaTimes
            style={{ position: "absolute", top: "20px", right: "20px" }}
          />
        ) : (
          <FaBars />
        )}
      </div>

      {/* Menu */}
      <ul className="hidden space-x-4 md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-[#D9DBF1] hover:font-bold hover:ease-in cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-[#D9DBF1] hover:font-bold hover:ease-in cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="hover:text-[#D9DBF1] hover:font-bold hover:ease-in cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-[#D9DBF1] hover:font-bold hover:ease-in cursor-pointer"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-[#D9DBF1] hover:font-bold hover:ease-in cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 right-0 w-full h-screen bg-[#333333] flex flex-col justify-center items-center ${
          !nav ? "hidden" : ""
        }`}
      >
        <li className="py-6 text-4xl font-bold">
          <Link
            onClick={handleToggle}
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600 hover:font-bold hover:ease-in"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold">
          <Link
            onClick={handleToggle}
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600 hover:font-bold hover:ease-in"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold">
          <Link
            onClick={handleToggle}
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600 hover:font-bold hover:ease-in"
          >
            Services
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold">
          <Link
            onClick={handleToggle}
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600 hover:font-bold hover:ease-in"
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl font-bold">
          <Link
            onClick={handleToggle}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-pink-600 hover:font-bold hover:ease-in"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
