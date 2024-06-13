import React from "react";

const sponsors = [
  { name: "Sponsor 1", website: "https://www.inventarkreisel.de/" },
  { name: "Sponsor 2", website: "https://sponsor2.com" },
];

const PartnerLinkPage = () => {
  return (
    <div className="App">
      <h3>Iframes in React</h3>
      <iframe
        src="https://www.industriepark-kassel.de/"
        width="100%"
        height="600px"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default PartnerLinkPage;
