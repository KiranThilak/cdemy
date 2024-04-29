import { useState } from 'react';

const RetrainingFaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: " Was ist, wenn ich die Umschulung anfange und dann wieder abbreche?",
      answerfirstpara: "Das ist Mist und zwar für fast alle Beteiligten. Dein Kostenträger hat Geld investiert, aber hat damit nichts an Deiner Qualifikation geändert. Wir haben einen Platz blockiert und uns fehlen Einnahmen. Du hast unter Umständen Jahre Deiner Lebenszeit verbraten, wovon Du rein gar nichts hast.",
      answersecondpara: "Und daher prüfe Dich selbst möglichst im Vorfeld, ob Du wirklich motiviert bist."
    
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Bis wann muss ich mich angemeldet haben?",
      answerfirstpara: "Wir haben keinen formalen Anmeldeschluss. Trotzdem ist Schnelligkeit von Vorteil, denn wir nehmen in der Regel nur 4 Teilnehmer je Starttermin auf.",

      answersecondpara: "Es ist prinzipiell auch möglich, verspätet in eine Umschulung einzusteigen. Allerdings ist das eine extreme Ausnahme.",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Was macht Ihr anders als Euer Wettbewerb?",
      answerfirstpara: "Eigentlich alles, was wir anders machen dürfen.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: " Wie sind meine Jobchancen nach der Umschulung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
    {
      question: "Ist das der gleiche Abschluss wie bei einer Ausbildung?",
      answerfirstpara: "Ja, Du nimmst an der gleichen Abschlussprüfung teil und erhältst die gleichen Abschlusszertifikate. Der einzige Unterschied ist, dass Du keine Berufsschule besucht hast und stattdessen mit uns vorlieb nehmen musstest.",

      answersecondpara: "",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-5xl md:leading-tight  text-indigo-900 pb-4">FAQ zur Umschulung</h2>
        <p className="mt-1 text-black ">Wenn ihr weitere Fragen zur Umschulung zum / zur Fachinformatiker:in in Kassel habt, die hier nicht beantwortet werden, dann könnt ihr uns gerne per Mail, Telefon oder Kontaktformular erreichen.</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="hs-accordion">
            <div className={`hs-accordion p-6 rounded-xl dark:hs-accordion-active:bg-white/10 ${activeIndex === index ? 'hs-accordion-active:bg-gray-100' : ''}`}>
              <button
                onClick={() => toggleAccordion(index)}
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-gray-600 "
                aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index + 1}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`flex-shrink-0 size-5 text-black group-hover:text-gray-600  transform ${activeIndex === index ? 'rotate-0' : 'rotate-180'}`}
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
                id={`hs-basic-with-title-and-arrow-stretched-collapse-${index + 1}`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${activeIndex === index ? '' : 'hidden'}`}
                aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index + 1}`}
              >
                <p className="text-black ">
                  {faq.answerfirstpara}
                </p>
                <p className="text-black pt-2">
                  {faq.answersecondpara}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RetrainingFaqPage;


  

