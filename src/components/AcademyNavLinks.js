import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink component from react-router-dom

const AcademyNavLinks = ({ isOpen }) => {
    const [dropdownStates, setDropdownStates] = useState({
        home: false,
        retraining: false,
        blog: false
    });

    const openDropdown = (dropdownName) => {
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: true
        });
    };

    const closeDropdown = (dropdownName) => {
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: false
        });
    };

    return (
        <div className="flex justify-center py-5 "> 
            <div className={`nav-links duration-500 md:static md:min-h-fit min-h-[60vh] left-0 ${isOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10 space-x-2">
                    {/* Dropdown for Home */}
                    <NavLink to="/academyhome" className="relative" onMouseEnter={() => openDropdown("home")} onMouseLeave={() => closeDropdown("home")}>
                        <AcademyDropdown
                            dropdownName="home"
                            isOpen={dropdownStates.home}
                            openDropdown={openDropdown}
                            closeDropdown={closeDropdown}
                        >
                            {/* Different content for Home dropdown */}
                            <NavLink to="/someotherpage" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Some Other Page</NavLink>
                        </AcademyDropdown>
                    </NavLink>
                    {/* Dropdown for Retraining */}
                    <AcademyDropdown
                        dropdownName="retraining"
                        isOpen={dropdownStates.retraining}
                        openDropdown={openDropdown}
                        closeDropdown={closeDropdown}
                    >
                        {/* Different content for Retraining dropdown */}
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Item 3</a>
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Item 4</a>
                    </AcademyDropdown>
                    {/* Dropdown for Blog */}
                    <AcademyDropdown
                        dropdownName="blog"
                        isOpen={dropdownStates.blog}
                        openDropdown={openDropdown}
                        closeDropdown={closeDropdown}
                    >
                        {/* Different content for Blog dropdown */}
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Item 5</a>
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Item 6</a>
                    </AcademyDropdown>

                    {/* Add other AcademyDropdowns here */}
                </div>
            </div>
        </div>
    );
};

const AcademyDropdown = ({ dropdownName, isOpen, openDropdown, closeDropdown, children }) => {
    return (
        <div className="relative" onMouseEnter={() => openDropdown(dropdownName)} onMouseLeave={() => closeDropdown(dropdownName)}>
            <button
                id={`dropdown-button-${dropdownName}`}
                className={`inline-flex justify-center w-full px-3 py-2 uppercase text-sm text-black bg-white rounded-md hover:bg-green-600 hover:text-white ${isOpen ? 'active:bg-green-600 active:text-white' : ''}`}
            >
                <span className="mr-2">{dropdownName}</span> {/* Display dropdown name */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                id={`dropdown-menu-${dropdownName}`}
                className={`absolute right-0 max-content rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${isOpen ? '' : 'hidden'}`}
            >
                {/* Render content */}
                {children}
            </div>
        </div>
    );
};

export default AcademyNavLinks;





