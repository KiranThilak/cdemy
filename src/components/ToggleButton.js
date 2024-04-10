// ToggleButton.js
import React from "react";

const ToggleButton = ({ handleButtonClick, activeButton }) => {
  return (
    <div className="bg-blue-200 p-1 rounded-full inline-block">
      <button
        className={`${
          activeButton === "Code Academy" ? "bg-blue-500 text-white " : "text-black"
        } px-4 py-2 rounded-full mr-2 `}
        onClick={() => handleButtonClick("Code Academy")}
      >
        Code Academy
      </button>
      <button
        className={`${
          activeButton === "Software Development" ? "bg-blue-500 text-white" : "text-black"
        } px-4 py-2 rounded-full`}
        onClick={() => handleButtonClick("Software Development")}
      >
        Software Development
      </button>
    </div>
  );
};

export default ToggleButton;





