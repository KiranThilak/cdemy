import React from "react";

import Spätaufsteher from "../assets/images/typischer-Spätaufsteher.jpg";
import gleitzeit from "../assets/images/gleitzeit.png";

const GlidetimeControlPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <figure className="mt-10 relative max-w-5xl mx-auto">
            <img
              className="w-full object-cover h-96 sm:h-[480px]  bg-no-repeat bg-center bg-cover rounded-xl"
              src={Spätaufsteher}
              alt="Ein typischer Spätaufsteher"
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Ein typischer Spätaufsteher.
            </figcaption>
          </figure>
          <div className="max-w-2xl text-center mx-auto pt-4">
            <h1 className="block text-3xl font-bold  text-indigo-900 sm:text-4xl md:text-5xl">
              Unsere Gleitzeit­regelung
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <p className="text-lg text-black">
              Informatiker sind nicht immer so veranlagt, dass sie problemlos
              sich in einen festen Tagesrhythmus einpassen können. Sicherlich
              muss man oft bestimmte Kompromisse machen, aber dauerhaftes
              Kämpfen gegen den eigenen Biorythmus führt auch nicht zu guten
              Ergebnissen. Daher gilt bei cdemy eine Gleitzeit-Regelung, die
              aber trotzdem optimale Betreuung in der{" "}
              <a
                className="text-green-600 decoration-2 hover:underline font-medium "
                href="#"
              >
                Umschulung zum / zur Fach­informatiker:in für
                Anwendungs­entwicklung in Kassel
              </a>{" "}
              sicherstellt.
            </p>
            <p className="text-lg text-black">
              Wenn Sie sich in diesem Zustand jeden Tag in den Unterricht
              quälen, dann haben Sie wenig davon - und Ihre Dozenten und die
              anderen Umschüler auch nicht.
            </p>
          </div>
          <div></div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Tagesaufbau in der Umschulung
            </h3>

            <p className="text-lg text-black">
              In der Umschulung bei cdemy setzen wir auf einen festen
              Tagesablauf:
            </p>
          </div>

          <figure className="mt-10 relative max-w-xl mx-auto">
            <img
              className="w-full object-cover h-full sm:h-full bg-no-repeat bg-center bg-cover rounded-xl"
              src={gleitzeit}
              alt="Tagesablauf bei cdemy-Umschulung"
              style={{ maxWidth: "100%", height: "auto" }}
            />{" "}
            {/* Add inline style */}
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Tagesablauf bei cdemy-Umschulung.
            </figcaption>
          </figure>

          <div className="space-y-3">
            <p className="text-lg text-black">
              Die Kernzeit ist für alle Teilnehmer:innen der{" "}
              <a
                className="text-green-600 decoration-2 hover:underline font-medium "
                href="#"
              >
                Anwendungs­entwicklungs-Umschulung
              </a>{" "}
              verpflichtend und in ihr finden sämtliche Theorie-Inhalte statt.
              Der Rest des Tages ist der Coding-Praxis gewidmet. Wer den ersten
              Praxis-Block ganz oder teilweise verpasst, der holt die verpasste
              Zeit in dem Gleitzeit-Block nach. Im Extremfall sind also folgende
              Fälle denkbar:
            </p>
          </div>
          <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-black">
            <li className="ps-2">
              Start um 08:00 Uhr und Ende um 16:30 Uhr (Vollzeit) bzw. 13:30 Uhr
              (Teilzeit).
            </li>
            <li className="ps-2">
              Start um 09:30 Uhr und Ende um 18:00 Uhr (Vollzeit) bzw. 15:00 Uhr
              (Teilzeit).
            </li>
          </ul>
          <div className="space-y-3">
            <p className="text-lg text-black">
              Dazwischen ist jedes Modell denkbar, solange es eben die Kernzeit
              nicht verletzt. Wichtig ist uns, dass man jederzeit voll betreut
              ist.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Sonstige Flexibilität
            </h3>

            <p className="text-lg text-black">
              Auch ansonsten ist die Umschulung recht flexibel und dem Gedanken
              der Work-Life-Balance nahe. Beispiele dafür:
            </p>
          </div>
          <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-black">
            <li className="ps-2">
              Fehlstunden in den Praxis-Blöcken können durch Überstunden
              ausgeglichen werden, um auch mal zeitlich flexibel einen
              Nachmittag frei machen zu können. Fehlstunden bei geplanten
              Theorie-Stunden sind allerdings zu vermeiden.
            </li>
            <li className="ps-2">
              Die meisten Urlaube sind fest verplant, aber es können auch
              abweichende Regelungen getroffen werden. .
            </li>
          </ul>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">Fazit</h3>

            <p className="text-lg text-black">
              Wir haben uns bei der Konzeptionierung der{" "}
              <a
                className="text-green-600 decoration-2 hover:underline font-medium "
                href="#"
              >
                Umschulung für Fachinformatiker:innen (Anwendungsentwicklung)s
              </a>{" "}
              viel Mühe gegeben, um den Teilnehmern und Teilnehmerinnen die
              maximale Flexibilität zu gewährleisten, ohne dass es zu
              Qualitätseinbußen kommt. Im Gegenteil, die Gleitzeit-Regelung
              führt dazu, dass die Teilnehmer-Betreuungsbedarfe sich entzerren
              und somit für jeden Teilnehmer individuell mehr Zeit zur Verfügung
              steht. Insgesamt trägt dazu auch bei, dass im Schnitt maximal 6
              Umschüler einem einzelnen Ausbilder zugeordnet werden (in den
              Praxisstunden, Theorie-Einheiten können ein größeres Publikum
              haben).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlidetimeControlPage;
