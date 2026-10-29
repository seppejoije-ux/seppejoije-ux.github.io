"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  fotos: string[];
};

export default function FotoSliderPijlen({ fotos }: Props) {
  const [zichtbaar, setZichtbaar] = useState(3);
  const [index, setIndex] = useState(0);
  const [animeren, setAnimeren] = useState(true);
  const [gepauzeerd, setGepauzeerd] = useState(false);
  const [klikTeller, setKlikTeller] = useState(0);
  const bezig = useRef(false);

  // is er genoeg om te schuiven? anders tonen we gewoon de foto's stil
  const kanSchuiven = fotos.length > zichtbaar;

  // 1 foto op gsm, 3 op groter scherm
  useEffect(() => {
    const update = () => setZichtbaar(window.innerWidth < 640 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  // automatisch doorschuiven, tenzij gepauzeerd of te weinig foto's
  useEffect(() => {
    if (gepauzeerd || !kanSchuiven) return;
    const timer = setInterval(volgende, 3500);
    return () => clearInterval(timer);
  }, [gepauzeerd, kanSchuiven, klikTeller, volgende]);

  const naTransitie = () => {
    bezig.current = false;
    if (index >= fotos.length) {
      setAnimeren(false);
      setIndex(0);
    }
  };

  const klikVolgende = () => {
    setKlikTeller((t) => t + 1);
    volgende();
  };

  const klikVorige = () => {
    setKlikTeller((t) => t + 1);
    vorige();
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
              className="h-80 w-full rounded-lg object-cover"
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
                className="h-80 w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Vorige foto"
        onClick={klikVorige}
        onMouseEnter={() => setGepauzeerd(true)}
        onMouseLeave={() => setGepauzeerd(false)}
        className={`${pijlStijl} left-2`}
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Volgende foto"
        onClick={klikVolgende}
        onMouseEnter={() => setGepauzeerd(true)}
        onMouseLeave={() => setGepauzeerd(false)}
        className={`${pijlStijl} right-2`}
      >
        ›
      </button>
    </div>
  );
}