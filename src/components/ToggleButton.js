// ToggleButton.js
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const ToggleButton = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-green-300 p-1 rounded-full inline-block">
      <NavLink to="/academyhome">
        <button
          className={`${
            pathname.includes("/academyhome")
              ? "bg-green-600 text-white"
              : "text-gray-800"
          } px-4 py-2 rounded-full mr-2 hover:bg-green-600 hover:text-white transition-colors duration-200`}
        >
          Code-Akademie
        </button>
      </NavLink>
      <NavLink to="/softwarehome">
        <button
          className={`${
            pathname.includes("/softwarehome")
              ? "bg-green-600 text-white"
              : "text-gray-800"
          } px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200`}
        >
          Software-Entwicklung
        </button>
      </NavLink>
    </div>
  );
};

export default ToggleButton;
