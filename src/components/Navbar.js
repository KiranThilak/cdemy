import React, { useState } from 'react';
import ToggleButton from "./TobbleButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Initialize state for each dropdown
    const [dropdownStates, setDropdownStates] = useState({
        home: false,
        retraining: false,
        offers: false,
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
        <header className="bg-white sticky top-0 left-0 right-0 z-50 font-sans " style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <div className="flex justify-between items-center w-92 mx-auto px-4">
                <div className='px-4'>
                    <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
                </div>
                <ToggleButton />  
                <div className="flex items-center mt-2 mr-2 ">
                    <button className="relative middle none center uppercase font-sans text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600  text-white shadow-lg hover:shadow-xl hover:shadow-blue-600/40 focus:shadow-outline focus:outline-none active:top-[2px] active:shadow-none disabled:pointer-events-none disabled:opacity-50" onClick={onToggleMenu}>
                        <span className="absolute top-0 right-0 bottom-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-75"></span>
                        <span className="relative">Contact</span>
                    </button>
                    <span onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">{isOpen ? '✖' : '☰'}</span>
                </div>
            </div>
            
            <div className="flex justify-center py-5 "> 
                <div className={`nav-links duration-500 md:static md:min-h-fit min-h-[60vh] left-0 ${isOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10 space-x-2">
                      
                    {/* Dropdown for Home */}
                    <div className="relative " onMouseEnter={() => openDropdown("home")} onMouseLeave={() => closeDropdown("home")}>
                        <button
                            id="dropdown-button-home"
                            className={`inline-flex justify-center w-full px-3 py-2 uppercase text-sm  text-black bg-white   rounded-md hover:bg-green-600 hover:text-white ${dropdownStates.home ? 'active:bg-green-600' : ''} ${dropdownStates.home ? 'active:text-white' : ''}`}
                        >
                            <span className="mr-2">Home</span>
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
                            id="dropdown-menu-home"
                            className={`absolute  right-0 max-content rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${dropdownStates.home ? '' : 'hidden'}`}
                        >
                        
                        {/* Dropdown content goes here */}
                        <a
                            href="#"
                            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
                        >
                            Uppercase
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
                        >
                            Lowercase
                        </a>
                        <a
                            href="#"
                            className=" block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md  whitespace-nowrap"
                        >
                            Camel Case
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
                        >
                            Kebab Case
                        </a>
                        </div>
                    </div>

                    <div className="relative " onMouseEnter={() => openDropdown("retraining")} onMouseLeave={() => closeDropdown("retraining")}>
    <button
        id="dropdown-button-retraining"
        className={`inline-flex justify-center w-full px-3 py-2 uppercase text-sm font- text-black bg-white   rounded-md hover:bg-green-600 hover:text-white ${dropdownStates.retraining ? 'active:bg-green-600' : ''} ${dropdownStates.retraining ? 'active:text-white' : ''}`}
    >
        <span className="mr-2">Retraining</span>
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
        id="dropdown-menu-retraining"
        className={`absolute right-0  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${dropdownStates.retraining ? '' : 'hidden'}`}
    >
        {/* Dropdown content goes here */}
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap "
        >
            Uppercase
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Lowercase
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Camel Case
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Kebab Case
        </a>
    </div>
</div>

<div className="relative " onMouseEnter={() => openDropdown("offers")} onMouseLeave={() => closeDropdown("offers")}>
    <button
        id="dropdown-button-offers"
        className={`inline-flex justify-center w-full px-3 py-2 uppercase text-sm font- text-black bg-white   rounded-md hover:bg-green-600 hover:text-white ${dropdownStates.offers ? 'active:bg-green-600' : ''} ${dropdownStates.offers ? 'active:text-white' : ''}`}
    >
        <span className="mr-2">Offers</span>
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
        id="dropdown-menu-offers"
        className={`absolute right-0  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${dropdownStates.offers ? '' : 'hidden'}`}
    >
        {/* Dropdown content goes here */}
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Uppercase
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Lowercase
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Camel Case
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Kebab Case
        </a>
    </div>
</div>

<div className="relative " onMouseEnter={() => openDropdown("blog")} onMouseLeave={() => closeDropdown("blog")}>
    <button
        id="dropdown-button-blog"
        className={`inline-flex justify-center w-full px-3 py-2 uppercase text-sm font- text-black bg-white   rounded-md hover:bg-green-600 hover:text-white ${dropdownStates.blog ? 'active:bg-green-600' : ''} ${dropdownStates.blog ? 'active:text-white' : ''}`}
    >
        <span className="mr-2">Blog</span>
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
        id="dropdown-menu-blog"
        className={`absolute right-0  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${dropdownStates.blog ? '' : 'hidden'}`}
    >
        {/* Dropdown content goes here */}
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Uppercase
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Lowercase
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Camel Case
        </a>
        <a
            href="#"
            className="block px-4 py-2 text-black hover:bg-green-600 hover:text-white cursor-pointer rounded-md whitespace-nowrap"
        >
            Kebab Case
        </a>
    </div>
</div>


                    
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;











