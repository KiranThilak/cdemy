import React from "react";

import programmierphilosophie from "../assets/images/programmierphilosophie.jpg";

const PhilosophiePage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4  py-4">
          <figure className="  relative max-w-5xl mx-auto pt-10">
            <img
              className="w-full object-cover h-96 sm:h-[480px]  bg-no-repeat bg-center bg-cover rounded-xl"
              src={programmierphilosophie}
              alt="Ein typischer Spätaufsteher"
            />
            {/*  <figcaption className="mt-3 text-sm text-center text-gray-500">
              Ein typischer Spätaufsteher.
            </figcaption> */}
          </figure>
          <div className="max-w-2xl text-center mx-auto py-8 ">
            <h1 className="block text-3xl font-bold  text-indigo-900 sm:text-4xl md:text-5xl">
              Unsere Coding-Philosophie
            </h1>
          </div>
          <div className="space-y-3 ">
            <p className="text-lg text-black">
              Unsere Herangehensweise bei der{" "}
              <a
                className="text-green-600 decoration-2 hover:underline font-medium "
                href="#"
              >
                Umschulung für Fachinformatiker für Anwendungs­entwicklung
              </a>{" "}
              in Sachen Programmierung ist sehr speziell und ambitioniert. In
              diesem Beitrag stellen wir dar, auf welchen Überlegungen unsere
              Herangehensweise beruht.
            </p>
          </div>
          <div className="space-y-3 py-3">
            <p className="text-lg text-black">
              Unser wichtigstes Ziel ist, dass die Fachinformatiker für
              Anwendungs­entwicklung, die wir ausbilden, im Anschluss produktiv
              als Entwickler tätig werden können bzw. hierfür optimal
              aufgestellt sind. Und aus diesem Ziel haben wir unsere Philosophie
              abgeleitet.
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

      <div className="container mx-auto px-4 py-8">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Beherrschung von Programmiersprachen
            </h3>
            <p className="text-lg text-black">
              Wir standen bei der Konzeptionierung dieser Umschulung vor einer
              Wahl:
            </p>
          </div>

          <div className="space-y-3">
            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-black">
              <li className="ps-2">
                Entweder wir lassen unsere Umschüler in 5 verschiedenen
                Programmiersprachen jeweils die Grundlagen lernen oder
              </li>
              <li className="ps-2">
                wir lernen 1-2 Programmiersprachen wirklich kennen, im Detail,
                absolut auf fortgeschrittenen Niveau und vermitteln den
                Teilnehmern darüber hinaus die Kompetenz, sich neue
                Programmiersprachen informiert zu erschließen. Welche Sprachen
                wir dafür nutzen werden wird{" "}
                <a
                  className="text-green-600 decoration-2 hover:underline font-medium "
                  href="#"
                >
                  an anderer Stelle
                </a>{" "}
                ausführlich besprochen.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Professionelle Herangehensweise
            </h3>

            <p className="text-lg text-black">
              Es ist eine Sache, privat eine App zu schreiben. Es ist eine
              andere Sache, eine professionelle Arbeitsweise zu haben. Dazu
              gehört, dass man nicht nur so schreibt, wie es einem gerade in den
              Sinn kommt, sondern dass man so schreibt, dass andere das eigene
              Denken nachvollziehen können. Themen wie Clean Code, Clean
              Architecture, Prozessbeschreibungen, Test Driven Design und Naming
              conventions spielen hier eine wichtige Rolle.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Teamfähigkeit
            </h3>

            <p className="text-lg text-black">
              Anwendungs­entwicklung ist in der Regel ein Team-Unterfangen.
              Einzelkämpfer sind sehr limitiert in dem, was sie erreichen
              können. Gerade Anwendungs­entwicklung ist der Bereich, in dem sehr
              offensiv mit verschiedenen Arten der Teamorganisation
              experimentiert wird, eben weil es so unglaublich wichtig ist, das
              Zusammenspiel der beteiligten Personen zu optimieren. Aus diesem
              Grund ist ein Großteil der Praxiszeit Gruppenprojekten gewidmet,
              in denen jeweils dann moderne Organisationsmethoden angewendet
              werden (zum Beispiel SCRUM, Agile).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-indigo-900">
              Projekterfahrung
            </h3>

            <p className="text-lg text-black">
              Das Lernen geschieht bei uns nicht nur über theoretischen
              Unterricht. Vielmehr sind unsere Praxisübungen ein integraler
              Bestandteil der Umschulung. Über weite Strecken der Umschulung
              werden Projekte absolviert, die wiederum eng auf den
              Unterrichtsplan abgestimmt sind. Eigene Erfahrungen führen zu
              besser behaltenem Lehrstoff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophiePage;
