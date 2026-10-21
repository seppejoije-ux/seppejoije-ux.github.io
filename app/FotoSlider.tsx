"use client";

import { useEffect, useRef, useState } from "react";

const FOTOS = [
  "/bowlingnederland.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg",
  "/foto6.jpg",
  // extra foto's? voeg hier gewoon een regel toe
];

export default function FotoSlider() {
  const [zichtbaar, setZichtbaar] = useState(3);
  const [index, setIndex] = useState(0);
  const [animeren, setAnimeren] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // 1 foto op gsm, 3 op groter scherm
  useEffect(() => {
    const update = () => setZichtbaar(window.innerWidth < 640 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // om de 3 seconden 1 foto opschuiven
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimeren(true);
      setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // na het schuiven: onzichtbaar terugspringen naar het begin
  const naTransitie = () => {
    if (index >= FOTOS.length) {
      setAnimeren(false);
      setIndex(0);
    }
  };

  // we zetten de eerste foto's achteraan zodat de lus naadloos is
  const alle = [...FOTOS, ...FOTOS.slice(0, zichtbaar)];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={trackRef}
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
              alt={`Foto ${(i % FOTOS.length) + 1}`}
              className="w-full h-48 sm:h-96 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}