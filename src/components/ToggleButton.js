import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const ToggleButton = ({ handleButtonClick }) => {
  const location = useLocation();


  const { pathname } = location;


  const activeButton = pathname.includes("/academyhome")
    ? "Code-Akademie"
    : "Software-Entwicklung";

  return (
    <div className="bg-green-200 p-1 rounded-full inline-block">
      <NavLink to="/academyhome">
        <button
          className={`${
            activeButton === "Code-Akademie" ? "bg-green-600 text-white " : "text-black"
          } px-4 py-2 rounded-full mr-2 `}
          onClick={() => handleButtonClick("Code-Akademie")}
        >
          Code-Akademie
        </button>
      </NavLink>
      <NavLink to="/softwarehome">
        <button
          className={`${
            activeButton === "Software-Entwicklung" ? "bg-green-600 text-white" : "text-black"
          } px-4 py-2 rounded-full`}
          onClick={() => handleButtonClick("Software-Entwicklung")}
        >
          Software-Entwicklung
        </button>
      </NavLink>
    </div>
  );
};

export default ToggleButton;






