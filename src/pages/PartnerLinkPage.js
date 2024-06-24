import React from "react";
import internationalitaet from "../assets/images/Partners.jpg";

const PartnerLinkPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <figure className="mt-10 relative max-w-5xl mx-auto">
            <img
              className="w-full object-cover h-96 sm:h-[480px]  bg-no-repeat bg-center bg-cover rounded-xl"
              src={internationalitaet}
              alt="Ein typischer Spätaufsteher"
            />
            {/*  <figcaption className="mt-3 text-sm text-center text-gray-500">
            Ein typischer Spätaufsteher.
          </figcaption> */}
          </figure>
          <div className="max-w-2xl text-center mx-auto pt-4">
            <h1 className="block text-3xl font-bold  text-indigo-900 sm:text-4xl md:text-5xl">
              Nützliche Ressourcen
            </h1>
          </div>
          <div className="container mx-auto px-4 py-8">
            {/* Content */}
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3">
                <p className="text-lg text-black">
                  Diese Seite dient vor allem dazu, all die nützlichen Links
                  unterzubringen, die wir unseren Besuchern nicht vorenthalten
                  wollen.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-indigo-900">
                  Behilfliche Behörden und Institutionen
                </h3>

                <ul className="list-disc list-outside space-y-5 ps-5 text-xl text-black">
                  <li className="ps-2">
                    <a
                      className="text-green-600 decoration-2 hover:underline font-medium "
                      href="#"
                    >
                      Inventarkreisel, der Möbel-Lieferant für schlaue
                      Unternehmer
                    </a>
                  </li>
                  <li className="ps-2">
                    <a
                      className="text-green-600 decoration-2 hover:underline font-medium "
                      href="#"
                    >
                      M-A-M Photo, unser Partner für Fotografie und Layouts
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-indigo-900">
                  Empfehlenswerte Unternehmen
                </h3>
                <ul className="list-disc list-outside space-y-5 ps-5 text-xl text-black">
                  <li className="ps-2">
                    <a
                      className="text-green-600 decoration-2 hover:underline font-medium "
                      href="#"
                    >
                      Industrie- und Handelskammer Kassel-Marburg
                    </a>
                  </li>
                  <li className="ps-2">
                    <a
                      className="text-green-600 decoration-2 hover:underline font-medium "
                      href="#"
                    >
                      Netzwerk Industriepark Kassel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLinkPage;
