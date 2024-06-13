import React from "react";

import auswahlverfahren from "../assets/images/auswahlverfahren.jpg";

const SelectionProcessPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <figure className="mt-10 relative max-w-5xl mx-auto">
            <img
              className="w-full object-cover h-96 sm:h-[480px]  bg-no-repeat bg-center bg-cover rounded-xl"
              src={auswahlverfahren}
              alt="Ein typischer Spätaufsteher"
            />
          </figure>
          <div className="max-w-xl text-center mx-auto pt-10">
            <h1 className="block text-4xl font-bold  text-indigo-900 sm:text-4xl md:text-5xl">
              Unser Auswahl­verfahren
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Content */}
        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <p className="text-xl text-black">
              Unser erster Antrieb ist, effizient an Projekten zu arbeiten.
              Daher begrenzen wir die Klassengröße auf eine handhabe, kleine
              Gruppe (12 Personen). Und zugleich wollen wir sicherstellen, dass
              wir die bestmögliche Gruppe zusammenstellen, denn Projekte
              gelingen und misslingen vor allem auf grund eines richtig oder
              falsch zusammengestellten Teams.
            </p>
            <p className="text-xl text-black">
              Daher haben wir speziell für die{" "}
              <a
                className="text-green-600 decoration-2 hover:underline font-medium "
                href="#"
              >
                Umschulung zum / zur Fachinformatiker:in für
                Anwendungs­entwicklung
              </a>{" "}
              einen Auswahlprozess zusammengestellt, der folgendermaßen
              aussieht:
            </p>
          </div>
          <div></div>

          <div className="space-y-3">
            <ol className="list-decimal list-outside space-y-5 ps-5 text-xl text-black">
              <li className="ps-2">
                {" "}
                Der /die Teilnehmer:in liest unsere Datenschutzhinweise und
                absolviert dann, wenn er / sie mit ihnen einverstanden sind,
                unseren{" "}
                <a
                  className="text-green-600 decoration-2 hover:underline font-medium "
                  href="#"
                >
                  Online-Einstiegstest.
                </a>{" "}
              </li>
              <li className="ps-2">
                {" "}
                Nach etwa zwei Werktagen melden wir uns zurück mit dem Ergebnis
                des Tests, zusammen mit einer Einladung zu einem
                Kennenlerngespräch (Videochat, Telefonat oder im Rahmen eines
                Besuchs bei uns).
              </li>
              <li className="ps-2">
                {" "}
                Gegen Ende des Kennenlerngesprächs kommen wir zu einer
                Einschätzung der Zulassungschancen und teilen diese dem
                Interessenten / der Interessentin mit. Es gibt im Wesentlichen
                die folgenden Ergebnisse:
              </li>
            </ol>
          </div>

          <ul className="list-disc list-outside space-y-5 ps-8 text-xl text-black">
            <li className="ps-2">
              Garantierte Zulassung: Sollte die Finanzierung sich vor Beginn des
              Kurses klären lassen, dann ist die Zulassung jetzt schon sicher.
            </li>
            <li className="ps-2">
              Mögliche Zulassung: Plätze werden vergeben nach dem System "wer
              zuerst kommt, malt zuerst".
            </li>
          </ul>
          <ul className="list-disc list-outside space-y-5 ps-8 text-xl text-black">
            <li className="ps-2">
              Möglicher Nachrücker: Sollten aufgrund von Verzögerungen kurz vor
              Ende der Zulassungszeit noch Plätze frei sein, kommen wir auf Dich
              zu.
            </li>
            <li className="ps-2">
              Ablehnung: Aus Gründen, die wir offen benennen werden, können wir
              den Wunsch, bei uns eine Umschulung zu absolvieren, leider nicht
              erfüllen.
            </li>
          </ul>

          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-indigo-900">
              Soll ich mich vorbereiten?
            </h3>

            <p className="text-xl text-black">
              Nein, das hat keinen Zweck. Der Test ist zu breit angelegt. Wir
              glauben nicht, dass man sich großartig auf ihn vorbereiten kann.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-indigo-900">
              Ist der Test auf Deutsch oder auf Englisch?
            </h3>

            <p className="text-xl text-black">
              Beides. Da Deutsch und Englisch bei uns beides Unterrichtsprachen
              sind, setzen wir die Beherrschung beider Sprachen voraus.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-indigo-900">
              Kann ich schummeln und nebenher googeln?
            </h3>

            <p className="text-xl text-black">
              Natürlich. Der Test ist aber so angelegt, dass das nicht viel
              bringt. Und ein wenig ist es so, dass richtiges Recherchieren
              online ja auch eine Qualität ist, die zu haben nicht schadet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionProcessPage;
