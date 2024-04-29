import React from "react";

import internationalitaet from "../assets/images/internationalitaet.jpg";

const InternationalityPage = () => {
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
              International in Kassel
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <p className="text-lg text-black">
              In vielerlei Hinsicht ist die Softwareentwicklung ein globale
              Profession: Internationale Zusammenarbeit mit Programmierer-Teams
              in anderen Länden und auf anderen Kontinenten, die meisten
              offiziellen Dokumentationen und Fachdiskussionen sind nur auf
              Englisch erhältlich, unsere Produkte zielen auf den
              internationalen Markt und wir arbeiten zusammen mit
              internationalen Lieferanten, Auftraggebern und Kollegen. All das
              führt dazu, dass wir unseren Horizont erweitern sollen und müssen
              und dass wir möglichst früh Internationalität in all ihren
              Facetten leben können.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Konkrete Auswirkungen auf die Umschulung
            </h3>
          </div>

          <div className="space-y-3">
            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-black">
              <li className="ps-2">
                Wie auch an anderer Stelle erwähnt, werden wir im Rahmen der{" "}
                <a
                  className="text-green-600 decoration-2 hover:underline font-medium "
                  href="#"
                >
                  Umschulung zum / zur Fachinformatiker:in für
                  Anwendungs­entwicklung in Kassel
                </a>{" "}
                oft mit der englischen Sprache konrontiert. Das heißt nicht,
                dass wir unter der Woche zwei Englisch-Stunden einstreuen,
                sondern dass potenziell jeder Unterricht auch englischsprachig
                ablaufen kann. Für unsere Teilnehmer soll es zunehmend normal
                sein, zwischen den Sprachen zu wechseln.
              </li>
              <li className="ps-2">
                Internationale Dozenten und Gastreferenten, die teilweise auch
                gar kein Deutsch können, aber eben ihr Fachgebiet beherrschen,
                tragen hierzu bei. Insbesondere soll auch mit ausländischen
                Programmierern zusammen programmiert werden.
              </li>
              <li className="ps-2">
                Im Unterricht werden deutsche und englische Medien gleichermaßen
                behandelt. In vielen Bereichen sind die Dokumentationen sogar
                nur auf Englisch vorhanden.
              </li>
              <li className="ps-2">
                Unser Code (Variablen, Funktionen, Methoden, Klassen und
                Kommentare) wird grundsätzlich immer auf Englisch geschrieben,
                um uns auf internationale Zusammenarbeit einzustellen.
              </li>
              <li className="ps-2">
                Es wird angeregt, im Rahmen der Umschulung in internationalen
                Projekten, auch Open Source Bereich, mitzuwirken.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Welches Englischniveau erwarten wir?
            </h3>

            <p className="text-lg text-black">
              Bereits zu Beginn der Umschulung sollte man Englisch auf einem
              Niveau beherrschen, dass den Umgang mit englisch geschriebenen
              Texten problemlos erlaubt - inklusive gelegentlichem Googeln.
              Englischförderung im schulischen Sinne biten wir nur in einem
              minimalen Umfang an. Mit anderen Worten: Die Englischkenntnisse
              sollten so gut sein, dass vor allem Übung und Wortschatz fehlen,
              nicht jegliche Grundlagen der englischen Grammatik. Wir sorgen
              dann dafür, dass Du genug Übung hast und Worte aufschnappen
              kannst!
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Ist es möglich, auch mit schlechterem Englisch teilzunehmen?
            </h3>

            <p className="text-lg text-black">
              Schon. Aber hier solltest Du dann schon uns aufzeigen, wie Du
              während Deiner Umschulung an der Verbesserung Deiner
              Sprachkenntnisse arbeiten willst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalityPage;
