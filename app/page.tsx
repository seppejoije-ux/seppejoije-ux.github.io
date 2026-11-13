"use client";

import { useState, useRef, useCallback } from "react";
import FotoSlider from "./FotoSlider";

type Bier = {
  id: number;
  left: number; // % van de schermbreedte
  size: number; // px
  duration: number; // s
  delay: number; // s
  drift: number; // px zijwaartse afwijking
  rotate: number; // graden rotatie tijdens het vallen
};

export default function Home() {
  const [bieren, setBieren] = useState<Bier[]>([]);
  const idRef = useRef(0);

  const laatBierenVallen = useCallback(() => {
    const aantal = 25;
    const nieuwe: Bier[] = Array.from({ length: aantal }, () => ({
      id: idRef.current++,
      left: Math.random() * 100,
      size: 28 + Math.random() * 36,
      duration: 1.8 + Math.random() * 1.8,
      delay: Math.random() * 0.8,
      drift: (Math.random() - 0.5) * 120,
      rotate: (Math.random() - 0.5) * 720,
    }));

    setBieren((huidige) => [...huidige, ...nieuwe]);

    // Na afloop opruimen (langste duur + langste delay + marge)
    const ids = new Set(nieuwe.map((b) => b.id));
    setTimeout(() => {
      setBieren((huidige) => huidige.filter((b) => !ids.has(b.id)));
    }, 4500);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Animatie voor de vallende biertjes */}
      <style>{`
        @keyframes bierVal {
          0% {
            transform: translate3d(0, -15vh, 0) rotate(0deg);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translate3d(var(--drift), 110vh, 0) rotate(var(--rotate));
            opacity: 0.9;
          }
        }
        @keyframes stoelWiebel {
          0% { transform: rotate(0deg) scale(1); }
          30% { transform: rotate(-6deg) scale(0.95); }
          60% { transform: rotate(4deg) scale(1.03); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .stoel-klik {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
        .stoel-klik:active {
          animation: stoelWiebel 0.35s ease-out;
        }
      `}</style>

      {/* Vallende biertjes (over de hele pagina, blokkeren geen kliks) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      >
        {bieren.map((b) => (
          <span
            key={b.id}
            className="absolute top-0 select-none"
            style={
              {
                left: `${b.left}%`,
                fontSize: `${b.size}px`,
                animation: `bierVal ${b.duration}s ease-in ${b.delay}s both`,
                "--drift": `${b.drift}px`,
                "--rotate": `${b.rotate}deg`,
              } as React.CSSProperties
            }
          >
            🍺
          </span>
        ))}
      </div>

      {/* Stoelen + titel */}
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-10 lg:gap-x-20 px-4 sm:px-10 py-8 lg:py-12">
        {/* Titel: op gsm bovenaan, op desktop in het midden */}
        <div className="order-1 w-full lg:w-auto lg:order-2 text-center max-w-xl mx-auto lg:mx-0 min-w-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 lg:mb-8">
            Stoel Zitten Pils Drinken
          </h1>
          <p className="text-xl sm:text-3xl lg:text-4xl">
            It&apos;s a lifestyle
          </p>
        </div>

        {/* Stoelen: op gsm naast elkaar onder de titel */}
        <div className="order-2 w-full flex justify-center items-center gap-2 sm:gap-6 lg:contents">
          <img
            src="/FotosHome/stoel_links.jpg"
            alt="Stoel links"
            onClick={laatBierenVallen}
            draggable={false}
            className="stoel-klik lg:order-1 h-32 sm:h-48 lg:h-70 w-auto min-w-0 max-w-[45%] lg:max-w-none object-contain"
          />
          <img
            src="/FotosHome/stoel_rechts.jpg"
            alt="Stoel rechts"
            onClick={laatBierenVallen}
            draggable={false}
            className="stoel-klik lg:order-3 h-32 sm:h-48 lg:h-70 w-auto min-w-0 max-w-[45%] lg:max-w-none object-contain"
          />
        </div>
      </div>

      {/* Strepen */}
      <div className="w-full">
        <div className="h-3 sm:h-5 w-full bg-blue-700" />
        <div className="h-3 sm:h-5 w-full bg-yellow-300 mb-5" />
      </div>

      {/* Wie zijn wij */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-10 py-8 lg:py-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Wie zijn wij
          </h2>
          <p className="text-base sm:text-2xl mb-4">
            Beste Stoelzitters en Pilsdrinkers
            <br />
            Wij zijn een startende studentenvereniging uit Roeselare, 
            opgericht door studenten van KU Leuven Brugge, KU Leuven 
            Kortrijk en VIVES Brugge. Ons doel is simpel: studenten 
            samenbrengen en zorgen voor onvergetelijke momenten naast 
            de lessen. Doorheen het jaar organiseren we leuke 
            activiteiten, gezellige avonden en evenementen waar sfeer, 
            vriendschap en plezier centraal staan. Of je nu komt voor 
            de gezelligheid, een frisse pint of nieuwe vrienden, bij 
            ons is iedereen welkom. Samen maken we van het 
            studentenleven iets om nooit te vergeten.
          </p>
          <p className="text-base sm:text-xl">SZPD it&apos;s a lifestyle</p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-sm lg:w-fit lg:max-w-none">
            <a
              href="/FotosHome/flyer_szpd_cafe_2026.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open de flyer in een nieuw tabblad"
              className="block"
            >
              <img
                src="/FotosHome/flyer_szpd_cafe_2026.png"
                alt="Flyer SZPD Café 26 november"
                className="block w-full h-auto lg:w-auto lg:h-150 cursor-zoom-in"
              />
            </a>

            <a
              href="https://www.szpdroeselare.be/events/2026-11-26-szpd-cafe/"
              className="block w-full rounded-md bg-blue-700 px-4 py-3 text-center text-sm sm:text-base font-bold uppercase tracking-wide text-yellow-300 hover:bg-blue-800 transition-colors"
            >
              Vooraf inschrijven = gratis drankje
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-8 lg:py-12">
        <FotoSlider />
      </section>
    </main>
  );
}