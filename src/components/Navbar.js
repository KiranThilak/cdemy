// Navbar.js
import React, { useState, useEffect } from "react";
import AcademyNavLinks from "./AcademyNavLinks";
import SoftwareNavLinks from "./SoftwareNavLinks";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import cdemyLogo from "../assets/images/logo_cdemy_150_50.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Code Academy");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <header
      className={`bg-white sticky top-0 left-0 right-0 z-50 ${
        isScrolled ? "py-2" : "py-4"
      } transition-all duration-300`}
      style={{
        boxShadow: isScrolled
          ? "0 2px 4px -1px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex justify-between items-center w-92 mx-auto px-4">
        {/*   <div className="px-4">
          <h1 className="text-6xl  font-bold text-black text-left pb-3 ">
            <NavLink
              to="/cdemyhome"
              className="text-3xl  font-bold text-left pb-5 bg-green-500 bg-clip-text text-transparent "
            >
              Cdemy
            </NavLink>
          </h1>
        </div> */}
        <div className="px-4">
          <h1 className="text-6xl font-bold text-black text-left pb-3">
            <NavLink to="/cdemyhome" className="text-left pb-5">
              <img src={cdemyLogo} alt="Cdemy" className="w-auto h-7" />
            </NavLink>
          </h1>
        </div>
        {isScrolled ? null : (
          <ToggleButton
            handleButtonClick={handleButtonClick}
            activeButton={activeButton}
          />
        )}
        {isScrolled && (
          <div>
            {activeButton === "Code Academy" && (
              <AcademyNavLinks isOpen={isOpen} />
            )}
            {activeButton === "Software Development" && (
              <SoftwareNavLinks isOpen={isOpen} />
            )}
          </div>
        )}
        <div className="flex items-center mt-2 mr-2 ">
          <NavLink
            to="/contactpage"
            className="relative middle none center uppercase text-sm px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600  text-white shadow-lg hover:shadow-xl hover:shadow-indigo-600/40 focus:shadow-outline focus:outline-none active:top-[2px] active:shadow-none disabled:pointer-events-none disabled:opacity-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="absolute top-0 right-0 bottom-0 left-0 w-full h-full rounded-full bg-indigo-900 opacity-75"></span>
            <span className="relative">Contact</span>
          </NavLink>
          <span
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </span>
        </div>
      </div>
      {!isScrolled && (
        <div>
          {activeButton === "Code Academy" && (
            <AcademyNavLinks isOpen={isOpen} />
          )}
          {activeButton === "Software Development" && (
            <SoftwareNavLinks isOpen={isOpen} />
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
