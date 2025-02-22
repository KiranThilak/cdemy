import React from "react";
import cdemy_home from "../assets/images/cdemy_home_5.jpg";
import LottieAnimation from "../assets/animation/LottieAnimation";
import codeacademy_animation from "../assets/animation/codeacademy_animation.json";
import software_animation from "../assets/animation/software_animation.json";
import { NavLink } from "react-router-dom";

const CdemyHome = () => {
  return (
    <div className="w-full inline-block">
      <div className="relative bg-white dark:bg-dark pt-20 pb-20 lg:pt-25 pb-25">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="inline-block hero-content">
                <h1 className="inline-block mb-5 text-4xl font-bold !leading-[1.208] text-indigo-900  sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  <span className="inline-block  text-4xl font-bold !leading-[1.208] text-green-500  sm:text-[42px] lg:text-[40px] xl:text-5xl">
                    Cdemy
                  </span>
                  &nbsp;ist ein AZAV- <br /> zertifizierter Umschulungsbetrieb
                </h1>
                <p className="mb-8 max-w-[480px] text-lg text-body-color dark:text-dark-6">
                  Die Cdemy GmbH ist ein Unternehmen, das sich der Aus- und
                  Weiterbildung im Bereich Anwendungsentwicklung verschrieben
                  hat. Darüber hinaus entwickeln wir im Kundenauftrag und in
                  Eigeninitiative plattformunabhängige Software.
                </p>
                <p className="mb-8 max-w-[480px] text-lg text-body-color dark:text-dark-6">
                  Unsere Basis ist das Angebot der innovativsten
                  AZAV-zertifizierten Umschulung zum Fachinformatiker für
                  Anwendungsentwicklung in Kassel.
                </p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/12"></div>
            <div className="w-full lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div
                  className="relative z-10 inline-block pt-11 lg:pt-0"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                  }}
                >
                  <img
                    src={cdemy_home}
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-md brightness-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white pb-12 pt-20 mb-5 lg:pb-90px lg:pt-120px dark:bg-dark">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary text-green-600">
              Unsere Dienstleistungen
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark text-indigo-900 sm:text-4xl md:text-[40px]">
              Was wir anbieten
            </h2>
            <p className="text-lg text-body-color dark:text-dark-6">
              Wir von der Cdemy GmbH sind auf Umschulungen zur
              Anwendungsentwicklung spezialisiert und bieten Softwarelösungen
              für alle Screens mittels Flutter und React an.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-wrap">
              <NavLink
                to="/academyhome"
                className="w-full md:w-1/2 lg:w-1/2 px-4 cursor-pointer flex justify-center items-center"
              >
                <div className=" mb-10 rounded-xl border-2 border-stroke hover:bg-blue-100 hover:border-indigo-300 bg-white px-8 py-10 shadow-pricing border-indigo-100 sm:p-12 lg:px-6 lg:py-10 xl:p-50px ">
                  <div className="flex justify-center">
                    <LottieAnimation
                      animationData={codeacademy_animation}
                      width={300}
                      height={300}
                    />
                  </div>

                  <span className="block text-lg font-semibold text-primary text-green-600 mb-3">
                    Umschulung
                  </span>
                  <h2 className="text-[30px] font-bold text-indigo-900 mb-5">
                    Code-Akademie
                  </h2>
                  <p className="pb-8 border-b border-stroke text-lg text-body-color dark:border-indigo-300 dark:text-dark-6">
                    Code- und Projektorientierte Ausbildungen & Weiterbildungen:
                  </p>
                  <div className="mb-9 flex flex-col gap-[14px]">
                    <div className="p-2 w-full">
                      <div className="rounded flex p-2 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">
                          Umschulung zum / zur Fachinformatiker:in für
                          Anwendungs­entwicklung
                        </span>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="rounded flex p-2 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">
                          Prüfungsvorbereitung für Fachinformatiker:innen für
                          Anwendungs­entwicklung
                        </span>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="rounded flex p-2 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">
                          Individuelle Weiterbildungsberatung.
                        </span>
                      </div>
                    </div>
                  </div>
                  <NavLink
                    to="/academyhome"
                    className="block w-full bg-indigo-900 hover:bg-indigo-700 text-white hover:shadow-indigo-600/40 focus:shadow-outline rounded-md border p-3 text-center text-lg font-medium transition"
                  >
                    Code-Akademie
                  </NavLink>
                </div>
              </NavLink>
              <NavLink
                to="/softwarehome"
                className="w-full md:w-1/2 lg:w-1/2 px-4 cursor-pointer"
              >
                <div className="mb-10 rounded-xl border-2 border-stroke hover:bg-blue-100 hover:border-indigo-300 bg-white px-8 py-10 shadow-pricing border-indigo-100 sm:p-12 lg:px-6 lg:py-10 xl:p-50px">
                  <div className="flex justify-center">
                    <LottieAnimation
                      animationData={software_animation}
                      width={300}
                      height={300}
                    />{" "}
                  </div>
                  <span className="block text-lg font-semibold text-primary text-green-600 mb-3">
                    Software
                  </span>
                  <h2 className="text-[30px] font-bold text-indigo-900 mb-5">
                    Software-Entwicklung
                  </h2>
                  <p className="pb-8 border-b border-stroke text-lg text-body-color dark:border-indigo-300 dark:text-dark-6">
                    App-Entwicklung für alle Bildschirme:
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <div className="mb-9 flex flex-col gap-[14px]">
                    <div className="p-2 w-full">
                      <div className="rounded flex p-2 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">
                          Mobile App-Entwicklung mit Fluttur
                        </span>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="rounded flex p-2 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">
                          Web-App-Entwicklung mit ReactJS
                        </span>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="rounded flex p-2 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>

                        <span className="title-font font-medium">
                          Desktop-App-Entwicklung mit Flutter
                        </span>
                      </div>
                      <span>&nbsp;</span>
                    </div>
                  </div>
                  <NavLink
                    to="/softwarehome"
                    className="block w-full bg-indigo-900 text-white  hover:bg-indigo-700 hover:shadow-indigo-600/40 focus:shadow-outline rounded-md border p-3 text-center text-lg font-medium transition"
                  >
                    Software-Entwicklung
                  </NavLink>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CdemyHome;
