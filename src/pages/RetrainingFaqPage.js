import { useState } from "react";

const RetrainingFaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        " Was ist, wenn ich die Umschulung anfange und dann wieder abbreche?",
      answerfirstpara:
        "Das ist Mist und zwar für fast alle Beteiligten. Dein Kostenträger hat Geld investiert, aber hat damit nichts an Deiner Qualifikation geändert. Wir haben einen Platz blockiert und uns fehlen Einnahmen. Du hast unter Umständen Jahre Deiner Lebenszeit verbraten, wovon Du rein gar nichts hast.",
      answersecondpara:
        "Und daher prüfe Dich selbst möglichst im Vorfeld, ob Du wirklich motiviert bist.",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara:
        "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Bis wann muss ich mich angemeldet haben?",
      answerfirstpara:
        "Wir haben keinen formalen Anmeldeschluss. Trotzdem ist Schnelligkeit von Vorteil, denn wir nehmen in der Regel nur 4 Teilnehmer je Starttermin auf.",

      answersecondpara:
        "Es ist prinzipiell auch möglich, verspätet in eine Umschulung einzusteigen. Allerdings ist das eine extreme Ausnahme.",
    },
    {
      question: "Was macht Ihr anders als Euer Wettbewerb?",
      answerfirstpara: "Eigentlich alles, was wir anders machen dürfen.",

      answersecondpara: "",
    },
    {
      question: "Wie sind meine Jobchancen nach der Umschulung?",
      answerfirstpara: "Es kommt drauf an. Sie sind ausgezeichnet, wenn:",

      listone: "Du auch wirklich gut bis und",
      listtwo:
        "wenn Du bereits bist, nach der Umschulung in einer anderen Region zu arbeiten.",
      answersecondpara:
        "In Kassel selbst ist der Arbeitsmarkt für den Beruf zurzeit okay. Er ist stetig besser geworden in den letzten Jahren. Dennoch sind die Chancen außerhalb noch immer deutlich besser und die Gehälter höher. Positiv ist aber, dass es ein Beruf ist, in dem Remote-Arbeit recht häufig ist. Insofern kann man auch in Kassel von einem guten Arbeitsmarkt beispielsweise in Baden-Würtemberg profitieren.",
    },

    {
      question:
        "Habe ich bei Euch einen festen Arbeitsplatz oder sitze ich jeden Tag woanders?",
      answerfirstpara:
        "Jede:r Teilnehmer:in hat bei uns einen festen Arbeitsplatz.",

      answersecondpara: "",
    },
    {
      question: " Welche (anderen) Berufe bietet Ihr an?",
      answerfirstpara:
        "Wir sind hochspezialisiert. Wir bieten ausschließlich die Umschulung zum / zur Fachinformatiker:in für Anwendungs­entwicklung an. Prinzipiell können wir uns auch Teilnehmer:innen vorstellen, die den / die Fachinformatiker:in für Daten- und Prozessanalyse (Berufsbild Analyst) anstreben, aber da da müssen viele Faktoren zusammenkommen, damit das funktioniert. Wir machen das nämlich nur dann, wenn wir auch praktisch für diese Teilnehmer:innen genug zu tun haben.",

      answersecondpara: "",
    },
    {
      question: "Welche Berufsschule besuche ich?",
      answerfirstpara:
        "Unser Konzept sieht keine Beteiligung einer Berufsschule vor. Der Unterricht findet komplett bei uns statt.",

      answersecondpara: "",
    },
    {
      question: "Wie bewerbe ich mich um einen Umschulungsplatz?",
      answerfirstpara:
        "Zuerst besprecht Ihr in der Regel mit dem für Euch zuständigen Kostenträger, ob eine Umschulung für Euch finanziert werden kann bzw. ob diese in Eurer Situation überhaupt sinnvoll ist. Wenn Ihr von dort signalisiert bekommt, dass Ihr Euch nach einem Träger umsehen sollt, dann vereinbart eine Einstiegsberatung mit uns (grüner Button rechts) oder legt direkt unseren Einstiegstest ab.",

      answersecondpara: "",
    },
    {
      question:
        "Wo bekomme ich einen Bildungsgutschein, um an der Umschulung teilzunehmen?",
      answerfirstpara:
        "Grundsätzlich sind dafür die Arbeitsagentur oder das Jobcenter zuständig, wenn Du zurzeit arbeitslos bist. In bestimmten Fällen können auch andere Sozialversicherungen (zum Beispiel Rentenversicherung, Berufsgenossenschaft, etc.) die Kosten Eurer Umschulung tragen, aber am üblichsten sind Arbeitsagentur und Jobcenter.",

      answersecondpara:
        "Besprich offen und ehrlich Deine beruflichen Perspektiven mit dem / der zuständigen Sachbearbeiter:in und vertrau darauf, dass er / sie auch ein Gefühl dafür hat, was das Beste in Deiner persönlichen Situation ist.",
    },
    {
      question: "Wofür steht der Name cdemy? Und wie spricht man ihn aus?",
      answerfirstpara: "cdemy ist die Kurzform von Code Academy.",

      answersecondpara:
        "Wir nutzen in der Regel die Aussprache Zeh-Demmi, aber Szie-Demmi (Englisch sozusagen) ist auch kein Kündigungsgrund. :-)",
    },
    {
      question: "Brauche ich einen Computer daheim um teilzunehmen?",
      answerfirstpara:
        "Nein, aber in manchen Konstellationen ist es definitiv von Vorteil. Daher helfen wir auch unbürokratisch mit Leihgeräten, falls das sinnvoll ist.",

      answersecondpara: "",
    },
    {
      question: "Ich bin ... anders, ist das ein Problem?",
      answerfirstpara:
        "Nö. Weißt du, am Ende produzieren wir hier Code, den Maschinen lesen können müssen. Dem Code ist das reichlich egal, wer ihn geschrieben hat",

      answersecondpara:
        "Wir fördern Vielfalt dort, wo es uns möglich ist. Und wir freuen uns auf Dich. Im einen oder anderen Fall werden unsere Möglichkeiten vielleicht eingeschränkt sein. Beispielsweise werden wir nicht für jede Behinderung die passende technische & räumliche Ausstattung haben, aber wir werden uns bemühen und sowas ehrlich mit Euch besprechen.",
    },
    {
      question: "Warum duzt Ihr mich?",
      answerfirstpara:
        "Unsere Teilnehmer werden behandelt wie Mitarbeiter und wir duzen einander, also duzen wir auch Dich.",

      answersecondpara: "",
    },
    {
      question: "Wie gut muss mein Englisch sein?",
      answerfirstpara:
        "Englischkenntnisse sind keine harte Voraussetzung, also auch ohne solche kann man durchaus aufgenommen werden.",

      answersecondpara:
        "Idealerweise versteht Ihr aber sowohl geschriebenes als auch gesprochenes (American) Englisch. Wenn Euch nur die Übung fehlt, dann ist das keinerlei Problem, denn Ihr werdet genug Übung haben.",
    },
    {
      question:
        "Ich wohne weit weg und habe deswegen lange Fahrtzeiten. Wie geht Ihr damit um?",
      answerfirstpara:
        "Wenn die persönliche Pendelzeit (hin und zurück zusammengenommen) nachweislich über 90 Minuten pro Tag liegen würde, dann finden wir hier gemeinsame Regelungen, welche die Umschulung möglich machen. Da können Elemente wie Homeoffice bzw. Arbeiten im ÖPNV oder am Abend eine Rolle spielen.",

      answersecondpara: "",
    },
    {
      question: "Wie geht Ihr mit Fehlzeiten in der Umschulung um?",
      answerfirstpara:
        "Unentschuldigte Fehlzeiten führen zur Abmahnung und im Wiederholungsfall zum Ausschluss. Wir haben sehr motivierte Teilnehmer:innen und es wäre ihnen gegenüber hochgradig unfair, wenn jemand, der/die deutlich weniger Einsatz zeigt, durchgeschleppt würde.",

      answersecondpara:
        "Entschuldigte Fehlzeiten (zumeist durch Krankheit) sind prinzipiell erstmal okay. Allerdings ist im Zuge der Prüfungszulassung zu prüfen, ob ein:e Teilnehmer:in die notwendige Ausbildungszeit absolviert hat - und bei dieser Betrachtung werden Fehltage herausgerechnet. Im Endeffekt führt das dazu, dass ab einer Krankheitsquote von 10% die Zulassung zur Prüfung in der Regel nicht erteilt werden kann. Und das bedeutet, dass die Umschulung verlängert werden muss, unabhängig davon, ob man eigentlich fit genug wäre für die Prüfung.",
    },
    {
      question: "Ich bin eine Frau. Ist das der richtige Beruf für mich?",
      answerfirstpara: "Ähm ... natürlich!",

      answersecondpara:
        "Also, klar ist, dass Frauen in der IT unterrepräsentiert sind. Aber das hat sich schon geändert und ändert sich weiter, und das ist auch gut so. Auch in der Umschulung sind Frauen in der Minderheit, aber das ist für uns eigentlich nur ein Ansporn, umso mehr darauf zu achten, dass nichts in der Umschulung irgendwie - und sei es noch so indirekt - Frauen abschreckt, diskriminiert oder verletzt.",
    },
    {
      question:
        "Ich bin Rassist. Muss ich bei Euch mit Ausländern zusammenarbeiten?",
      answerfirstpara: "Bleib einfach weg. Dankeschön. :-)",

      answersecondpara: "",
    },
    {
      question: "Was bedeutet Eure Gleitzeit-Regelung für mich?",
      answerfirstpara:
        "Frühaufsteher kommen um 08:00 Uhr und bleiben bis 16:30 Uhr (Vollzeit) bzw. 13:30 Uhr (Teilzeit). Man darf aber auch bis zu 1,5 Stunden später kommen (also bis 09.30), wenn man entsprechend länger bleibt. Auch unter der Woche sind Verschiebungen möglich, solange es fair bleibt und Du die Unterrichte nicht verpasst.",

      answersecondpara: "",
    },
    {
      question: "Welche Gehaltsaussichten habe ich nach der Umschulung?",
      answerfirstpara:
        "Prinzipiell kann man als Anwendungsentwickler gut verdienen, aber versprecht Euch nicht zuviel. Im Endeffekt ist ein Startgehalt von 3.000 - 4.000 Euro / Monat nach der Umschulung vollkommen okay.",

      answersecondpara: "",
    },
    {
      question:
        "Kann ich die Umschulung (oder Teile daon) im Homeoffice absolvieren?",
      answerfirstpara:
        "Prinzipiell findet eine Ausbildung, ausgenommen in Krisenzeiten, in Präsenz statt. Phasenweise und im geringen Umfang ist Homeoffice aber durchaus möglicher Unterrichtsbestandteil, weil das natürlich auch zu unserem späteren Berufsbild passt. Im Endeffekt ist das aber nichts, worauf man sich verlassen kann.",

      answersecondpara: "",
    },
    {
      question: "Wie finanziere ich mich während der Umschulung?",
      answerfirstpara:
        "Die Regelungen dazu beschließt der Gesetzgeber und sie verändern sich daher laufend. Zurzeit ist es (ohne Gewähr) so, dass Umschüler ihr Arbeitslosengeld / Bürgergeld während der Umschulung weiter bekommen. Ihre Fahrtkosten werden (pauschaliert) ebenfalls ersetzt. Und dann erhalten sie eine Pauschale, die ihre (im Vergleich zur Arbeitslosigkeit) erhöhten Lebenshaltungskosten abfedern soll. Für bestandene Prüfungen gibt es zudem Prämien (zurzeit in Höhe von zusammengenommen 2.500 Euro). Der Lebensstandard sollte sich daher während der Umschulung nicht verschlechtern. Den Einzelfall muss man aber dann auch einzeln prüfen.",

      answersecondpara: "",
    },
    {
      question: "Welche Bücher werden gestellt?",
      linklistone: "IT-Handbuch für Fachinformatiker:innen ",
      linklisttwo: "Basiswissen IT-Berufe: Anwendungs­entwicklung ",
      linklistthree:
        "Entwurfsmuster von Kopf bis Fuß: Mit Design Patterns flexible objektorientierte Software erstellen ",

      answersecondpara:
        "Weitere Literatur kann bei Bedarf auch von uns gestellt werden.",
    },
    {
      question: "Werde ich bei Euch verpflegt?",
      answerfirstpara:
        "Nicht wirklich. Wir bieten unseren Teilnehmer:innen gratis einige Getränke und auch einfache Instant-Gerichte (a la Tütensuppe) an, aber daraus wird beim besten Willen keine organisierte Mittagsverpflegung. Die meisten Teilnehmer:innen bringen sich daher etwas von zuhause mit.",

      answersecondpara: "",
    },
    {
      question: "Sehe ich Euch auch nach der Umschulung nochmal wieder?",
      answerfirstpara:
        "Hoffentlich. Zum einen freuen wir uns über jede:n Absolvent:in, der/die uns besucht. Wir werden auch die Jobsuche mit Euch gemeinsam durchziehen. Und im Endeffekt freuen wir uns immer besonders, wenn wir mit ehemaligen Teilnehmer:innen im Kontakt bleiben, diese vielleicht sogar noch einige Stunden bei uns halten. Unser Ziel ist schon, dass hier mit der Zeit ein aktives Netzwerk entsteht.",

      answersecondpara: "",
    },
    {
      question: "Wo mache ich mein Praktikum?",
      answerfirstpara:
        "Die Umschulung beinhaltet ein Praktikum von 110 (Vollzeit) bzw. 180 (Teilzeit) Tagen. Prinzipiell stellen wir sicher, dass Du das Praktikum auch bei uns in der Anwendungs­entwicklung absolvieren könntest, aber externe Praxisbetriebe sind uns noch lieber.",

      answersecondpara: "",
    },
    {
      question: "Kann ich die Umschulung auch privat finanzieren?",
      answerfirstpara:
        "Nicht wirklich. Zum einen ist sie schlicht zu teuer. Zum anderen gibt es zahlreiche Komplikationen, wie zum Beispiel:",
      listone:
        "Wenn Ihr 40h pro Woche zu uns kommt, dann steht Ihr dem Arbeitsmarkt nicht zur Verfügung (Problem gegenüber Arbeitsagentur / Jobcenter).",
      listtwo: "Wer bezahlt Eure Krankenversicherung?",
      answersecondpara:
        "Daher ist es in der Regel keine Option. Es sind aber natürlich auch Ausnahmesituationen vorstellbar, in denen all diese Faktoren keine Rolle spielen. Dann sprecht uns an und wir diskutieren den Wunsch gemeinsam.",
    },
    {
      question: "Welche Programmiersprachen werde ich lernen?",
      answerfirstpara:
        "Wir haben uns dafür entschieden, lieber wenige Sprachen richtig zu lernen, als in vielen Programmiersprachen immer nur die Grundlagen. Und daher verbringen wir relativ viel Zeit mit relativ wenigen Sprachen. Es sei aber angemerkt, dass man dann, wenn man eine Sprache wirklich versteht, auch bemerkt, dass der Wechsel zu einer anderen Sprache relativ einfach ist.",

      answersecondpara:
        "Letztlich sind es vor allem Dart / Flutter und Javascript, mit denen Ihr in der Umschulung konfrontiert werdet. Andere Sprachen spielen erst in den letzten Abschnitten der Umschulung eine Rolle. Wieso wir uns für diese Sprachen entschieden haben, könnt Ihr unter anderem hier nachlesen.",
    },
    {
      question:
        "Ich habe die Theorie, dass Bill Gates zusammen mit den Illmuninati ...",
      answerfirstpara:
        "Ganz ehrlich. Wir behandeln hier Logik und Algorithmen. Lineares Denken ist Basisvoraussetzung. Wir haben keinerlei Lust, uns mit Geschwurbel auseinanderzusetzen. Insofern wird das nichts mit uns.",

      answersecondpara: "",
    },
    {
      question: "Ich wohne nicht in Kassel. Kann ich remote teilnehmen?",
      answerfirstpara:
        "Wir hatten das vor, aber das ist leider nicht möglich. Wir sind davon überzeugt, dass wir auch für etwas weiter entfernt lebende Teilnehmer:innen Lösungen finden können, als das bei anderen Bildungsträgern möglich ist, allein schon aufgrund der Gleitzeitregelungen etc., aber letztlich werdet Ihr uns schon besuchen müssen. Da kommen wir nicht drumherum. Bei langen Fahrtzeiten (siehe unter dem Stichwort) finden wir aber immer Kompromisse.",

      answersecondpara: "",
    },
    {
      question:
        "Wie schwer ist es, Euch zu einer aus meiner Sicht sinnvollen Zusatzausgabe zu überreden?",
      answerfirstpara:
        "Wir sind zur Wirtschaftlichkeit verpflichtet, aber dazu gehört für uns auch, auf keinen Fall geizig zu sein. Unsere Teilnehmer:innen können uns Investitionen oder Ausgaben vorschlagen und diese werden wir nach Möglichkeit dann auch umsetzen.",

      answersecondpara: "",
    },
    {
      question: "Wo sitzt Ihr?",
      answerfirstpara:
        "Wir sitzen in der Richard-Roosen-Straße 9 im Industriegebiet Kassel-Waldau.",

      answersecondpara: "",
    },
    {
      question: "Wann startet die nächste Umschulung?",
      answerfirstpara:
        "Die nächsten Starttermine stehen auf der Seite für die Umschulung.",

      answersecondpara: "",
    },
    {
      question: "Wann empfehlt Ihr Teilzeit statt Vollzeit?",
      answerfirstpara:
        "Wir versuchen, unter anderem durch unsere Gleitzeitregelung, möglichst vielen Interessenten eine Vollzeit-Umschulung zu ermöglichen. Aber nicht immer ist das möglich, weil einfach keine 40 Stunden pro Woche drin sind. In diesen Fällen empfehlen wir dann eine Teilzeit-Maßnahme.",

      answersecondpara: "",
    },
    {
      question: "Was unterscheidet Teilzeit von Vollzeit?",
      answerfirstpara:
        "Offensichtlich ist der Zeiteinsatz pro Woche geringer und dafür dauert die Umschulung länger. Aber auch in der Organisation unterscheiden sich die beiden Modelle.",

      answersecondpara:
        "Im Endeffekt können wir zwischen Abschluss der theoretischen Ausbildung und dem Beginn des Praktikums bei Teilzeit-Umschülern noch deutlich mehr Coding-Projekte angehen.",
    },
    {
      question: "Wieviel Urlaub habe ich in der Umschulung?",
      answerfirstpara:
        "Teilnehmer:innen haben einen Urlaubsanspruch von 2 Tagen je Monat, also 24 Urlaubstage im Jahr. Es gibt verplante Urlaube, aber Verschiebungen sind im Einzelfall möglich.",

      answersecondpara: "",
    },
    {
      question: "Ist mein gesamter Urlaub fest verplant?",
      answerfirstpara:
        "Jein. Wir haben zu Beginn jeder Maßnahme den gesamten Urlaub für jede:n Teilnehmer:in verplant, aber Du kannst frei Urlaube schieben, also von uns geplante Tage gegen von Dir geplante Tage tauschen. Im Endeffekt kannst Du den Urlaub also so legen, wie es Dir am besten passt. Trotzdem ist es sinnvoll, die meisten von uns geplanten Tage so zu belassen, weil Du dann keinen Unterricht versäumst.",

      answersecondpara: "",
    },
    {
      question: "Welche Tools / Programme nutzt Ihr in der Umschulung?",
      answerfirstpara:
        "Wir nutzen Jira für die Organisation unserer Projekte und Confluence für das interne Wissensmanagement. Unseren Code lagern und verwalten wir mittels Bitbucket und Github. Hin und wieder basteln wir an Dokumenten, Kalkulationen und Präsentationen mit Microsoft Office 365. Außerdem nutzen wir Teams für die interne Kommunikation und auch für Teile der Dokumentation. Für alle diese Programme erhaltet Ihr jeweils Lizenzen für den Umschulungszeitraum. Darüber hinaus kommen zahlreiche kostenlose Tools zum Einsatz wie Visual Studio Code, Git, Diagrams.net, Figma, etc.",

      answersecondpara: "",
    },
    {
      question: "Kann ich die Umschulung verkürzen?",
      answerfirstpara:
        "Das ist nur in Ausnahmefällen denkbar, aber wir sind durchaus dazu bereit, uns das im Einzelfall anzuschauen. Bedenkt aber, dass eine Umschulung, die ein Drittel kürzer ist als eine Ausbildung, sowieso schon eine Verkürzung darstellt.",

      answersecondpara: "",
    },
    {
      question:
        "Was passiert, wenn ich mich in der Umschulung verspäte bzw. früher gehe?",
      answerfirstpara:
        "Die Zeit wird in jedem Fall nachgeholt. Wir führen für jede:n Teilnehmer:in ein Stundenkonto.",

      answersecondpara: "",
    },
    {
      question: "Welche Voraussetzungen muss ich mitbringen, um zu starten?",
      answerfirstpara:
        "Formal gibt es keine Voraussetzungen. Du brauchst keinen bestimmten Bildungsabschluss und auch keine bereits abgeschlossene Berufsausbildung. Aber wir achten in der Auswahl unserer Teilnehmer:innen auf logisches und mathematisches Verständnis, Englischkenntnisse und einige motivatorische Aspekte.",

      answersecondpara:
        "Hinzu kommt, dass die Umschulung in der Regel zu teuer ist, um sie privat zu bezahlen. Daher braucht Ihr einen Kostenträger, der die Umschulung finanziert, zum Beispiel durch einen Bildungsgutschein von der Arbeitsagentur oder einem Jobcenter oder irgendeine andere Art von Förderung.",
    },
    {
      question: "Wie bereite ich mich auf meine startende Umschulung vor?",
      answerfirstpara:
        "Ganz ehrlich: Die beste Vorbereitung ist, wenn Du Kraft tankst. Geh spazieren, triff Dich mit Freunden. Es liegen anfordernde Monate vor Dir. Ruiniere Dir die Wartezeit nicht damit, dass Du jetzt schon alles lernen willst.",

      answersecondpara: "",
    },
    {
      question: "Bietet Ihr einen Vorbereitungskurs für die Umschulung an?",
      answerfirstpara:
        "Unseres Erachtens ist das reine Geldschneiderei von manchen Bildungsträgern. Ein Vorbereitungskurs ist nicht sinnvoll und unter keinen Umständen notwendig. Etwas anderes ist, wenn Ihr noch unsicher seid, ob die Umschulung zu Euch passt. Dann könnt Ihr gerne wegen einem Schnupper-Praktikum bei uns anfragen. Das wird in der Regel auch von den Kostenträgern unterstützt.",

      answersecondpara: "",
    },
    {
      question:
        "Welche Vorteile bringen mir Vorkenntnisse in der Programmierung?",
      answerfirstpara:
        "Nunja, natürlich hast Du gewisse Vorteile davon, wenn Du schon profunde Programmierkenntnisse hast. Und unser Konzept erlaubt Teilnehmern mit Vorkenntnissen (und auch schnellen Lernern), sich schneller fortgeschrittenen Themen zu wechseln, als dass die Kollegen tun können.",

      answersecondpara:
        "Aber hinsichtlich der Anmeldung sind Vorkenntnisse ein relativ unwichtiges Kriterium.",
    },
    {
      question: "Was tut Ihr für die Erhaltung meiner Arbeitskraft?",
      answerfirstpara:
        "Wir bemühen uns, immer auch mal wieder andere Reize zu setzen als nur Arbeit und Lernen. Im Sommerhalbjahr machen wir daher vermehrt kleinere Ausflüge, im Winter gehen wir auch mal bowlen oder in die Therme. Hin und wieder essen wir gemeinsam Pizza (oder dergleichen) und die Firma zahlt. Wir bieten eine Gleitzeitregelung an, damit unterschiedliche Biorythmen mit uns zurechtkommen. Und wenn der Kopf mal raucht beim Coden, dann wird Euch jeder zu einer Pause raten. Mit anderen Worten: Es ist kein Verwöhnprogramm, aber im Rahmen unserer Möglichkeiten bemühen wir uns, die Umschulungszeit so angenehm wie möglich zu machen.",

      answersecondpara: "",
    },
    {
      question:
        "Welche anderen Qualifikationen - neben dem Berufsabschluss - kann ich während der Umschulungszeit erwerben?",
      answerfirstpara:
        "Wir haben kein Standardangebot a la jede:r absolviert auch die Zusatzqualifikation X, weil das im Einzelfall in der Regel auch wenig sinnvoll ist. Stattdessen gucken wir gerne individuell, welche Qualifikationen sinnvoll wären. Wir werden das in der Regel wohlwollend prüfen.",

      answersecondpara: "",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-5xl md:leading-tight  text-indigo-900 pb-4">
          FAQ zur Umschulung
        </h2>
        <p className="mt-1 text-black ">
          Wenn ihr weitere Fragen zur Umschulung zum / zur Fachinformatiker:in
          in Kassel habt, die hier nicht beantwortet werden, dann könnt ihr uns
          gerne per Mail, Telefon oder Kontaktformular erreichen.
        </p>
      </div>

      <div className="max-w-3xl mx-auto ">
        {faqs.map((faq, index) => (
          <div key={index} className="hs-accordion">
            <div
              className={`hs-accordion p-6 rounded-xl dark:hs-accordion-active:bg-white/10 ${
                activeIndex === index ? "hs-accordion-active:bg-gray-100" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-gray-600 "
                aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${
                  index + 1
                }`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`flex-shrink-0 size-5 text-black group-hover:text-gray-600  transform ${
                    activeIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
              <div
                id={`hs-basic-with-title-and-arrow-stretched-collapse-${
                  index + 1
                }`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300  ${
                  activeIndex === index ? "" : "hidden"
                }`}
                aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${
                  index + 1
                }`}
              >
                <p className="text-black pt-2">{faq.answerfirstpara}</p>
                <ul className="text-black pt-2">
                  <li className="text-black pt-2">{faq.listone}</li>
                  <li className="text-black pt-2 pb-2">{faq.listtwo}</li>
                </ul>

                <p className="text-black pt-2">{faq.answersecondpara}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetrainingFaqPage;
