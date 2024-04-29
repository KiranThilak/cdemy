import React from "react";
import LottieAnimation from "../assets/animation/LottieAnimation";
import academyhome_animation from "../assets/animation/academyhome_animation.json";
import jiraimage from "../assets/images/project-management-with-jira.webp";
import Gemeinsames_Arbeiten from "../assets/images/Gemeinsames-Arbeiten-am-Code.webp";
import Statistik from "../assets/images/Statistik-zu-einem-unserer-Übungsprojekte.webp";
import Schulungsraum from "../assets/images/Unser-Haupt-Schulungsraum-mit-Umschülern.webp";
import Pausenraum from "../assets/images/Ein-Blick in-unseren-(unaufgeräumten)-Pausenraum.webp";

const AcademyHome = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 py-16 ">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="mb-5 text-3xl font-bold text-indigo-900  sm:text-[45px]/[52px]">
              Umschulung zum / zur{" "}
              <span class="text-green-600">Fachinformatiker</span> in
              Anwendungs­entwicklung im Überblick
            </h1>
            <p className="mt-3 text-lg text-gray-800 ">
              Wir bieten Umschulungen für Fachinformatiker in Kassel an.
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <a
                href="#"
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-900 text-white hover:bg-indigo-800 disabled:opacity-50 disabled:pointer-events-none"
              >
                Schedule a meeting
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-green-600 text-white shadow-sm hover:bg-green-500 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Contact us
              </a>
            </div>
          </div>
          {/* End Col */}

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <div className="max-w-screen-lg p-8">
              <LottieAnimation
                animationData={academyhome_animation}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="mb-5 text-3xl font-bold text-indigo-900  sm:text-[40px]/[48px]">
              Die Umschulung zum / zur{" "}
              <span class="text-green-600">Fachinformatiker</span> in
              (Anwendungs­entwicklung) im Überblick
            </h2>

            <p className="text-lg text-black">
              Die Code Academy bietet eine Umschulung zum / zur
              Fach­informatiker:in für Anwendungs­entwicklung in Kassel an.
              Dabei setzen wir auf ein innovatives Konzept, das sich an den
              Bedürfnissen der Teilnehmer:innen orientiert.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Praxisorientierte Ausbildung
            </h3>

            <p className="text-lg text-black">
              Wir konzentrieren uns auf die Praxis des Programmierens und des
              Konzeptionierens von Software. Unser Ziel ist stets, dass wir
              praxisorientiert und nah an Programmcode arbeiten. Du lernst
              komplexe Programmier-Projekte kennen und übernimmst Verantwortung
              in ihnen. Wir legen besonderen Wert darauf, dass Du Dich wirklich
              am Ende als "Fachinformatiker:in für Anwendungs­entwicklung"
              fühlst und professionell programmieren kannst. Wir arbeiten wie
              Profis, steuern zum Beispiel unsere Projekte mit JIRA,
              dokumentieren mit Confluence (auf Englisch), versionieren mit GIT,
              speichern auf Github und Bitbucket - immer nah am
              Branchenstandard.
            </p>
          </div>
          <figure>
            <img
              className="w-full object-cover rounded-xl"
              src={jiraimage}
              alt="Projektmanagement mit JIRA"
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Projektmanagement mit JIRA.
            </figcaption>
          </figure>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Individuelle Betreuung
            </h3>

            <p className="text-lg text-black">
              Wir beschränken uns auf maximal 12 Teilnehmer:innen über alle
              Jahrgänge und Bildungsangebote hinweg und bieten
              Vor-Ort-Unterricht in Kassel an, keine virtuelle Pseudogruppe mit
              einem Dozenten in Erlangen. Alle Dozent:innen und Betreuer:innen
              verfügen über fundiertes Fachwissen und Praxiserfahrung. Alle
              unsere Dozenten sind in der Softwareentwicklung tätig und arbeiten
              mit Dir jeden Tag am Code. Wir setzen auf kleine Gruppen und
              beschränken uns selbst auf 6 startende Teilnehmer:innen pro
              Semester. So können wir Dich intensiv betreuen
            </p>
          </div>
          <figure>
            <img
              className="w-full object-cover rounded-xl"
              src={Gemeinsames_Arbeiten}
              alt="Gemeinsames Arbeiten am Code"
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Gemeinsames Arbeiten am Code (Dozent sitzt links)
            </figcaption>
          </figure>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Hohes Niveau, Tiefe statt Breite
            </h3>

            <p className="text-lg text-black">
              In den meisten Umschulungen schreiben die Teilnehmer:innen maximal
              100zeilige Progrämmchen und dann kommt der Praxisschock nach
              Abschluss bzw. im Praktikum. Wir hingegen suchen potenzialreiche
              Kandidat:innen und bilden diese auf einem hohen Niveau aus. Nach
              circa 6 Monaten beschäftigen sich unsere Teilnehmer:innen bereits
              mit komplexen Softwareprojekten, mit zehntausenden Zeilen Code.
            </p>
          </div>
          <figure>
            <img
              className="w-full object-cover rounded-xl"
              src={Statistik}
              alt="Statistik zu einem unserer Übungsprojekte"
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Statistik zu einem unserer Übungsprojekte (das letzte, nicht das
              größte)
            </figcaption>
          </figure>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Moderne Arbeitsatmosphäre
            </h3>

            <p className="text-lg text-black">
              Wir legen Wert auf eine familiäre Startup-Atmosphäre und verstehen
              uns mehr als Arbeitgeber denn als Schule. Wir arbeiten eng
              zusammen, duzen einander und unterstützen uns gegenseitig. Unsere
              bereits erfahrenen Teilnehmer:innen übernehmen Verantwortung für
              die neuen. Wir zeigen aber auch, dass das Leben nicht nur aus
              Programmieren bestehen kann und fördern die Work-Life-Balance
              durch Kanufahrten, Schwimmbadbesuche, gemeinsames Grillen und was
              uns noch so einfällt. Zudem haben wir eine Gleitzeitregelung, um
              verschiedenen Biorhythmen zu entsprechen.
            </p>
          </div>
          <figure>
            <img
              className="w-full object-cover rounded-xl"
              src={Schulungsraum}
              alt="Unser Haupt-Schulungsraum mit Umschülern"
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Unser Haupt-Schulungsraum mit Umschülern
            </figcaption>
          </figure>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Täglicher Bedarf ist gratis
            </h3>

            <p className="text-lg text-black">
              Zum Miteinander gehört für uns auch, dass wir nicht noch
              versuchen, den Teilnehmer:innen Geld für den täglichen Bedarf aus
              der Tasche zu ziehen. Entsprechend sind Kaffee, Tee, ausgewählte
              Kaltgetränke und ebenso die schnelle Zwischenmahlzeit
              grundsätzlich gratis.
            </p>
          </div>
          <figure>
            <img
              className="w-full object-cover rounded-xl"
              src={Pausenraum}
              alt="Ein Blick in unseren (unaufgeräumten) Pausenraum"
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              Ein Blick in unseren (unaufgeräumten) Pausenraum
            </figcaption>
          </figure>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Vor Ort in Kassel
            </h3>

            <p className="text-lg text-black">
              Unsere Umschulung zum / zur Fach­informatiker:in für
              Anwendungs­entwicklung bieten wir ausschließlich vor Ort in Kassel
              an. Gerne stehen wir persönlich zur Verfügung, um Fragen im
              Vorfeld zu beantworten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyHome;
