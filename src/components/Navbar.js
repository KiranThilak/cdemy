// Navbar.js
import React, { useState } from 'react';
import ToggleButton from "./ToggleButton";
import AcademyNavLinks from "./AcademyNavLinks";
import SoftwareNavLinks from "./SoftwareNavLinks";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("Code Academy");

    const onToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <header className="bg-white sticky top-0 left-0 right-0 z-50  " style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <div className="flex justify-between items-center w-92 mx-auto px-4">
                <div className='px-4'>
                    <h1 className="text-6xl  font-bold text-black text-left pb-3 ">
                        <NavLink to="/cdemyhome" className="text-3xl  font-bold text-left pb-5 bg-green-500 bg-clip-text text-transparent ">
                            Cdemy
                        </NavLink>
                    </h1>
                </div>
                <ToggleButton handleButtonClick={handleButtonClick} activeButton={activeButton} />
                <div className="flex items-center mt-2 mr-2 ">
                    <NavLink to="/contactpage" className="relative middle none center uppercase text-sm px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600  text-white shadow-lg hover:shadow-xl hover:shadow-indigo-600/40 focus:shadow-outline focus:outline-none active:top-[2px] active:shadow-none disabled:pointer-events-none disabled:opacity-50" onClick={onToggleMenu}>
                        <span className="absolute top-0 right-0 bottom-0 left-0 w-full h-full rounded-full bg-indigo-900 opacity-75"></span>
                        <span className="relative">Contact</span>
                    </NavLink>
                    <span onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">{isOpen ? '✖' : '☰'}</span>
                </div>
            </div>

            {/* Conditionally render navigation links based on activeButton */}
            {activeButton === "Code Academy" && <AcademyNavLinks isOpen={isOpen} />}
            {activeButton === "Software Development" && <SoftwareNavLinks isOpen={isOpen} />}
        </header>
    );
};

export default Navbar;













