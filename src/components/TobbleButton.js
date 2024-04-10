import React, { useState } from "react";

export default function App() {
  const [activeButton, setActiveButton] = useState("Code Academy"); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); 
  };

  return (
    <div className="mx-auto mt-4 text-center">
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
    </div>
  );
}





