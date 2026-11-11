"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

// ====== AAN TE PASSEN ======
const NAAM = "SZPD"; // naam begunstigde
const IBAN = "BE82731079947068"; // IBAN zonder spaties
const BIC = ""; // optioneel
// ===========================

const MAX_MEDEDELING = 140;

// Bouwt de EPC069-12 (SEPA Credit Transfer) QR-inhoud
function epcPayload(bedrag: number, mededeling: string): string {
  return [
    "BCD",
    "002",
    "1",
    "SCT",
    BIC,
    NAAM.slice(0, 70),
    IBAN.replace(/\s/g, "").toUpperCase(),
    `EUR${bedrag.toFixed(2)}`,
    "",
    "",
    mededeling.slice(0, MAX_MEDEDELING),
  ].join("\n");
}

type Props = {
  bedrag?: number;
  // Tekst die voor de gegevens komt in de mededeling, bv. "SZPD café 26/11/2026"
  mededelingVoor?: string;
  // Optioneel: pad naar een logo in /public, bv. "/logo.png"
  logoSrc?: string;
};

type Inschrijving = {
  voornaam: string;
  familienaam: string;
  email: string;
};

const schoon = (s: string) => s.replace(/\s+/g, " ").trim();

const inputClass =
  "w-full border-2 border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-blue-700";

export default function BetaalQR({
  bedrag = 7.5,
  mededelingVoor = "SZPD café",
  logoSrc,
}: Props) {
  const [voornaam, setVoornaam] = useState("");
  const [familienaam, setFamilienaam] = useState("");
  const [email, setEmail] = useState("");
  const [fout, setFout] = useState("");
  const [inschrijving, setInschrijving] = useState<Inschrijving | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const bouwMededeling = (i: Inschrijving) =>
    `${mededelingVoor} - ${i.voornaam} ${i.familienaam} - ${i.email}`;

  const mededeling = inschrijving ? bouwMededeling(inschrijving) : "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nieuw: Inschrijving = {
      voornaam: schoon(voornaam),
      familienaam: schoon(familienaam),
      email: email.trim(),
    };

    if (!nieuw.voornaam || !nieuw.familienaam || !nieuw.email) {
      setFout("Vul alle velden in.");
      return;
    }

    if (bouwMededeling(nieuw).length > MAX_MEDEDELING) {
      setFout(
        "Je gegevens zijn te lang voor de mededeling van een overschrijving. Gebruik eventueel een kortere naam of e-mailadres."
      );
      return;
    }

    setFout("");
    setInschrijving(nieuw);
  }

  function wijzigGegevens() {
    setInschrijving(null);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !inschrijving) return;

    let geannuleerd = false;

    QRCode.toCanvas(canvas, epcPayload(bedrag, mededeling), {
      errorCorrectionLevel: "H",
      width: 320,
      margin: 2,
    }).then(() => {
      if (geannuleerd || !logoSrc) return;

      const logo = new Image();
      logo.onload = () => {
        if (geannuleerd) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const max = canvas.width * 0.22;
        const schaal = Math.min(max / logo.width, max / logo.height);
        const w = logo.width * schaal;
        const h = logo.height * schaal;
        const x = (canvas.width - w) / 2;
        const y = (canvas.height - h) / 2;

        ctx.fillStyle = "white";
        ctx.fillRect(x - 5, y - 5, w + 10, h + 10);
        ctx.drawImage(logo, x, y, w, h);
      };
      logo.src = logoSrc;
    });

    return () => {
      geannuleerd = true;
    };
  }, [inschrijving, mededeling, bedrag, logoSrc]);

  return (
    <div className="border-2 border-blue-700 rounded-lg p-4 sm:p-6 flex flex-col items-center gap-4">
      {!inschrijving && (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-center">
            Schrijf je in
          </h3>

          <div className="flex flex-col gap-1">
            <label htmlFor="qr-voornaam" className="font-semibold">
              Voornaam
            </label>
            <input
              id="qr-voornaam"
              type="text"
              value={voornaam}
              onChange={(e) => setVoornaam(e.target.value)}
              maxLength={30}
              required
              autoComplete="given-name"
              placeholder="Voornaam"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="qr-familienaam" className="font-semibold">
              Familienaam
            </label>
            <input
              id="qr-familienaam"
              type="text"
              value={familienaam}
              onChange={(e) => setFamilienaam(e.target.value)}
              maxLength={30}
              required
              autoComplete="family-name"
              placeholder="Familienaam"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="qr-email" className="font-semibold">
              E-mailadres
            </label>
            <input
              id="qr-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={60}
              required
              autoComplete="email"
              placeholder="naam@voorbeeld.be"
              className={inputClass}
            />
          </div>

          {fout && (
            <p className="text-red-600 text-center" role="alert">
              {fout}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg rounded-lg px-6 py-3 transition-colors"
          >
            Inschrijven
          </button>
        </form>
      )}

      <canvas
        ref={canvasRef}
        className={inschrijving ? "rounded-lg" : "hidden"}
        style={{ width: 320, maxWidth: "100%", height: "auto" }}
      />

      {inschrijving && (
        <>
          <p className="text-center text-gray-600">
            Scan met je bank-app · €{bedrag} · mededeling:{" "}
            <strong className="break-words">{mededeling}</strong>
          </p>
          <button
            type="button"
            onClick={wijzigGegevens}
            className="text-blue-700 underline"
          >
            Gegevens wijzigen
          </button>
        </>
      )}
    </div>
  );
}