import React, { useState } from 'react';
import ToggleButton from "./TobbleButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
     
        <header className="bg-green-200  sticky top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center w-92 mx-auto px-4">
                <div className='px-4'>
                    <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
                </div>
                <ToggleButton/>  
                <div className="flex items-center gap-6 px-4">
                    <button className="middle none center px-4 py-2 rounded-full mr-2 bg-gradient-to-r bg-green-600 text-xs uppercase text-white shadow-md  hover:shadow-lg hover:shadow-green-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={onToggleMenu}>Contact</button>
                    <span onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">{isOpen ? '✖' : '☰'}</span>
                </div>
            </div>
            
            <div className="flex justify-center py-5 "> 
                <div className={`nav-links duration-500 md:static md:min-h-fit min-h-[60vh] left-0 ${isOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-10">
                        <li>
                            <a className="hover:text-gray-500 uppercase" href="#">Home</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500 uppercase" href="#">Retraining</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500 uppercase" href="#">Offers</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500 uppercase" href="#">Blog</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </header>
     

       
    );
};

export default Navbar;









