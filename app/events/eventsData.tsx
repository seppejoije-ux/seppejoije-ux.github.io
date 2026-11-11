import type { ReactNode } from "react";
import BetaalQR from "./BetaalQR";

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
    info: (
      <>
        <p>
          Tijdens het SZPD Café verkopen we drankjes aan studentvriendelijke
          prijzen. Kom gezellig iets drinken en leer ons kennen!
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          Schrijf op voorhand in
        </h2>
        <p>
          Wie vooraf inschrijft, betaalt <strong>€7.5</strong> en krijgt daarvoor:
        </p>
        <ul className="list-disc pl-6">
          <li>een drankkaart ter waarde van €7.5</li>
          <li>je eerste drankje gratis</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold mt-4">
          Zo schrijf je in
        </h2>
        <ol className="list-decimal pl-6">
          <li>Vul hieronder je naam in. Je krijgt dan je eigen QR-code.</li>
          <li>Scan de QR-code met de app van je bank.</li>
          <li>
            Bevestig de overschrijving van €7.5. Je naam staat al in de
            mededeling.
          </li>
          <li>
            Kom op de avond zelf langs, toon je ID en krijg je
            gratis drankje + drankkaart.
          </li>
        </ol>

        <BetaalQR bedrag={7.5} 
        mededelingVoor="SZPD café 26/11/2026"
        logoSrc="/FotosHome/logoSite.jpg" />
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
