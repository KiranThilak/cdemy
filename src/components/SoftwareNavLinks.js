import React, { useState } from 'react';

const SoftwareNavLinks = ({ isOpen }) => {
    const [dropdownStates, setDropdownStates] = useState({
        home: false,
        products: false,
        about: false
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
                    <SoftwareDropdown
                        dropdownName="home"
                        isOpen={dropdownStates.home}
                        openDropdown={openDropdown}
                        closeDropdown={closeDropdown}
                    >
                        {/* Different content for Home dropdown */}
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Product 1</a>
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Product 2</a>
                    </SoftwareDropdown>
                    {/* Dropdown for Products */}
                    <SoftwareDropdown
                        dropdownName="products"
                        isOpen={dropdownStates.products}
                        openDropdown={openDropdown}
                        closeDropdown={closeDropdown}
                    >
                        {/* Different content for Products dropdown */}
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Product A</a>
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Product B</a>
                    </SoftwareDropdown>
                    {/* Dropdown for About */}
                    <SoftwareDropdown
                        dropdownName="about"
                        isOpen={dropdownStates.about}
                        openDropdown={openDropdown}
                        closeDropdown={closeDropdown}
                    >
                        {/* Different content for About dropdown */}
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">About Us</a>
                        <a href="#" className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap">Contact Us</a>
                    </SoftwareDropdown>

                    {/* Add other SoftwareDropdowns here */}
                </div>
            </div>
        </div>
    );
};

const SoftwareDropdown = ({ dropdownName, isOpen, openDropdown, closeDropdown, children }) => {
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

export default SoftwareNavLinks;
