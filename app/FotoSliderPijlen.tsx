"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  fotos: string[];
};

// ---- gedeelde timer voor ALLE sliders op de pagina ----
const luisteraars = new Set<() => void>();
let ticker: ReturnType<typeof setInterval> | null = null;

function abonneer(fn: () => void) {
  luisteraars.add(fn);
  if (!ticker) {
    ticker = setInterval(() => {
      luisteraars.forEach((l) => l());
    }, 3500);
  }
  return () => {
    luisteraars.delete(fn);
    if (luisteraars.size === 0 && ticker) {
      clearInterval(ticker);
      ticker = null;
    }
  };
}
// -------------------------------------------------------

export default function FotoSliderPijlen({ fotos }: Props) {
  const [zichtbaar, setZichtbaar] = useState(3);
  const [index, setIndex] = useState(0);
  const [animeren, setAnimeren] = useState(true);
  const [gepauzeerd, setGepauzeerd] = useState(false);
  const bezig = useRef(false);
  const gepauzeerdRef = useRef(false);
  const kanSchuivenRef = useRef(false);

  // is er genoeg om te schuiven? anders tonen we gewoon de foto's stil
  const kanSchuiven = fotos.length > zichtbaar;

  // 1 foto op gsm, 3 op groter scherm
  useEffect(() => {
    const update = () => setZichtbaar(window.innerWidth < 640 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // refs bijhouden zodat de gedeelde timer altijd de laatste waarde ziet
  useEffect(() => {
    gepauzeerdRef.current = gepauzeerd;
  }, [gepauzeerd]);

  useEffect(() => {
    kanSchuivenRef.current = kanSchuiven;
  }, [kanSchuiven]);

  const volgende = useCallback(() => {
    if (bezig.current) return;
    bezig.current = true;
    setAnimeren(true);
    setIndex((i) => i + 1);
  }, []);

  const vorige = () => {
    if (bezig.current) return;
    bezig.current = true;

    if (index === 0) {
      setAnimeren(false);
      setIndex(fotos.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimeren(true);
          setIndex(fotos.length - 1);
        })
      );
    } else {
      setAnimeren(true);
      setIndex((i) => i - 1);
    }
  };

  // meedoen met de gedeelde timer: alleen schuiven als dit blok niet gepauzeerd is
  useEffect(() => {
    return abonneer(() => {
      if (gepauzeerdRef.current || !kanSchuivenRef.current) return;
      volgende();
    });
  }, [volgende]);

  const naTransitie = () => {
    bezig.current = false;
    if (index >= fotos.length) {
      setAnimeren(false);
      setIndex(0);
    }
  };

  // te weinig foto's: gewoon netjes naast elkaar, zonder pijlen
  if (!kanSchuiven) {
    return (
      <div className="flex w-full justify-center">
        {fotos.map((src, i) => (
          <div
            key={i}
            className="shrink-0 px-2"
            style={{ flex: `0 0 ${100 / zichtbaar}%` }}
          >
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  const alle = [...fotos, ...fotos.slice(0, zichtbaar)];

  const pijlStijl =
    "absolute top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/80";

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden">
        <div
          className="flex"
          onTransitionEnd={naTransitie}
          style={{
            transform: `translateX(-${(index * 100) / zichtbaar}%)`,
            transition: animeren ? "transform 0.6s ease" : "none",
          }}
        >
          {alle.map((src, i) => (
            <div
              key={i}
              className="shrink-0 px-2"
              style={{ flex: `0 0 ${100 / zichtbaar}%` }}
            >
              <img
                src={src}
                alt={`Foto ${(i % fotos.length) + 1}`}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Vorige foto"
        onClick={vorige}
        onMouseEnter={() => setGepauzeerd(true)}
        onMouseLeave={() => setGepauzeerd(false)}
        className={`${pijlStijl} left-2`}
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Volgende foto"
        onClick={volgende}
        onMouseEnter={() => setGepauzeerd(true)}
        onMouseLeave={() => setGepauzeerd(false)}
        className={`${pijlStijl} right-2`}
      >
        ›
      </button>
    </div>
  );
}