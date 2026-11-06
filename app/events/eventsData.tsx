import type { ReactNode } from "react";

export type SzpdEvent = {
  date: string; // "YYYY-MM-DD"
  day: string;
  month: string;
  title: string;
  location: string;
  description: ReactNode;
  type: "szpd" | "external";
  // OPTIONEEL: vul dit in om het event klikbaar te maken.
  // Geen `info`? Dan is het event niet klikbaar.
  info?: ReactNode;
};

export const events: SzpdEvent[] = [
  {
    date: "2026-11-26",
    day: "26",
    month: "NOV",
    title: "SZPD Café",
    location: "18:30 · STUVO Brugge",
    description: "Kennismaking ",
    type: "szpd",
    // Voorbeeld van een event mét extra info (klikbaar):
    info: (
      <>
        <p>
          Kom kennismaken met SZPD tijdens ons eerste SZPD Café. Zin om 
          gezellig iets te drinken, een potje biljart of een pijltje te gooien? Iedereen is welkom!!!
        </p>
        <p> </p>
      </>
    ),
  },

  {
    date: "2026-10-29",
    day: "29",
    month: "OKT",
    title: "Vergadering",
    location: "20:00 · De Sloeber",
    description: "bestuursvergadering",
    type: "szpd",
    
    
    
  },

  {
    date: "2026-10-22",
    day: "22",
    month: "OKT",
    title: "LAN PARTY",
    location: "18:00 · Stuvo Brugge",
    description: (
      <>
        Georganiseerd door IEEE Brugge.
        <br />
        Verschillende SZPD-leden zullen aanwezig zijn.
      </>
    ),
    type: "external",
  },

  {
    date: "2026-11-07",
    day: "7",
    month: "NOV",
    title: "Sint Maartensstoet",
    location: "17:00 · Ardooie",
    description: (
      <>
        stoet met praalwagens en vuurwerk
        <br />
        SZPD is present
      </>
    ),
    type: "external",
    
    
  },

  {
    date: "2026-11-20",
    day: "20",
    month: "NOV",
    title: "QUIZ DVK EGEM",
    location: "19:00 · De Magneet Pittem",
    description: (
      <>
        Georganiseerd door Jeugd Dames VK Egem.
        <br />
        Eén team vertegenwoordigt SZPD
      </>
    ),
    type: "external",
  },

  {
    date: "2026-10-15",
    day: "15",
    month: "OKT",
    title: "Vergadering",
    location: "20:00 · De Sloeber",
    description: "Aankomende activiteiten regelen",
    type: "szpd",
  },
];

// Automatische url-naam: datum + titel, bv. "2026-11-26-szpd-cafe"
export function eventSlug(e: SzpdEvent): string {
  const titel = e.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${e.date}-${titel}`;
}
