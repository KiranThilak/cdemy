import React from 'react';

const CardSection = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">Services</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Cdemy Provides</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:bg-green-100 cursor-pointer">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0 ">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Code Academy</h2>
              </div>
              <div className="flex-grow ">
                <p className="leading-relaxed text-base  ">
                        Code- und Projektorientierte Ausbildungen & Weiterbildungen:
                    </p>
          {/*       <a href="#" className="mt-3 text-green-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  <div class="p-2 w-full">
    <div class=" rounded flex p-2 h-full items-center ">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <span class="title-font font-medium">Umschulung zum / zur Fachinformatiker:in für Anwendungs­entwicklung</span>
    </div>
  </div>
  <div class="p-2 w-full"> 
    <div class=" rounded flex p-2 h-full items-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <span class="title-font font-medium">Prüfungsvorbereitung für Fachinformatiker:innen für Anwendungs­entwicklung</span>
    </div>
  </div>
  <div class="p-2 w-full"> 
    <div class=" rounded flex p-2 h-full items-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <span class="title-font font-medium">
                            Individuelle Weiterbildungsberatung.
                        </span>
    </div>
  </div>
  
</div>

            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:bg-green-100 cursor-pointer">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">Software Development</h2>
              </div>
              <div >
                <p className="leading-relaxed text-base">App Development for all screens:</p>
           {/*      <a href="#" className="mt-3 text-green-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  <div class="p-2 w-full">
    <div class=" rounded flex p-2 h-full items-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <span class="title-font font-medium">Mobile App Development with Fluttur</span>
    </div>
  </div>
  <div class="p-2 w-full">
    <div class=" rounded flex p-2 h-full items-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <span class="title-font font-medium">Web App Development with ReactJS</span>
    </div>
  </div>
  <div class="p-2 w-full">
    <div class=" rounded flex p-2 h-full items-center">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
      <span class="title-font font-medium">Desktop App Development with Flutter</span>
    </div>
  </div>

</div>

            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default CardSection;

