// ToggleButton.js
import React from "react";
import { NavLink } from "react-router-dom";

const ToggleButton = ({ handleButtonClick, activeButton }) => {
  return (
    <div className="bg-green-200 p-1 rounded-full inline-block">
        <NavLink to="/academyhome"><button
        className={`${
          activeButton === "Code Academy" ? "bg-green-600 text-white " : "text-black"
        } px-4 py-2 rounded-full mr-2 `}
        onClick={() => handleButtonClick("Code Academy")}
      >
        Code Academy
      </button>
      </NavLink>
      <NavLink to="/softwarehome">
      <button
        className={`${
          activeButton === "Software Development" ? "bg-green-600 text-white" : "text-black"
        } px-4 py-2 rounded-full`}
        onClick={() => handleButtonClick("Software Development")}
      >
        Software Development
      </button>
      </NavLink>
    </div>
  );
};

export default ToggleButton;





