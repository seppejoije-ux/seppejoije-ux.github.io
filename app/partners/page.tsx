type Partner = {
  naam: string;
  logo?: string; // pad in /public, bv. "/partners/acme.png"
  website?: string; // optioneel: zonder website is het logo niet klikbaar
};

type Hoofdsponsor = Partner & {
  plaats?: string;
  beschrijving?: string;
  extra?: string[]; // losse infolijntjes, bv. adres, openingsuren, ...
};

// De hoofdsponsor staat bovenaan: logo links, info rechts.
const hoofdsponsor: Hoofdsponsor = {
  naam: "De Sloeber",
  plaats: "Koolskamp",
  logo: "/LogosSponsors/sloeber.webp",
  website: "https://www.zaaldesloeber.be/",
  beschrijving:
    "Ons vaste stamcafé",
  extra: [
    // "Adres: Straatnaam 1, 8720 Koolskamp",
    // "Openingsuren: ...",
  ],
};

// Voeg hier gewoon partners toe of verwijder ze.
const partners: Partner[] = [
  // { naam: "Partner één", logo: "/LogosSponsors/Decoral.jpg" }, // logo zonder website
  { naam: "Partner twee", logo: "/LogosSponsors/ClassicDesign.webp", website: "https://classic-design.be/" },
  { naam: "Partner drie", logo: "/LogosSponsors/Stuvo.webp", website: "https://www.vives.be/nl/studeren/stuvo" },
  // geen logo -> naam als tekst: { naam: "Partner vier", website: "https://www.voorbeeld.com" },
  // { naam: "Partner vijf" },
];

function PartnerKaart({ partner }: { partner: Partner }) {
  const inhoud = partner.logo ? (
    <img
      src={partner.logo}
      alt={partner.naam}
      loading="lazy"
      className="h-40 sm:h-52 w-auto max-w-full object-contain"
    />
  ) : (
    <span className="text-center font-semibold text-neutral-700 text-2xl">
      {partner.naam}
    </span>
  );

  // 1 per rij op gsm, 2 per rij op laptop.
  const basis = "flex items-center justify-center transition w-full sm:w-[calc(50%-1.5rem)]";

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Bezoek de website van ${partner.naam}`}
        className={`${basis} hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
      >
        {inhoud}
      </a>
    );
  }

  return <div className={basis}>{inhoud}</div>;
}

function HoofdsponsorKaart({ sponsor }: { sponsor: Hoofdsponsor }) {
  const logo = sponsor.logo ? (
    <img
      src={sponsor.logo}
      alt={sponsor.naam}
      className="h-56 sm:h-72 w-auto max-w-full object-contain"
    />
  ) : (
    <span className="text-4xl sm:text-5xl font-semibold text-neutral-700">
      {sponsor.naam}
    </span>
  );

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
      {/* Links: logo */}
      <div className="flex w-full items-center justify-center md:w-1/2">
        {sponsor.website ? (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Bezoek de website van ${sponsor.naam}`}
            className="transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {logo}
          </a>
        ) : (
          logo
        )}
      </div>

      {/* Rechts: info */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        <h3 className="text-4xl sm:text-5xl font-bold">{sponsor.naam}</h3>
        {sponsor.plaats && (
          <p className="mt-2 text-2xl text-neutral-500">{sponsor.plaats}</p>
        )}
        {sponsor.beschrijving && (
          <p className="mt-6 text-xl text-neutral-700">{sponsor.beschrijving}</p>
        )}
        {sponsor.extra && sponsor.extra.length > 0 && (
          <ul className="mt-4 space-y-1 text-lg text-neutral-600">
            {sponsor.extra.map((regel) => (
              <li key={regel}>{regel}</li>
            ))}
          </ul>
        )}
        {sponsor.website && (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Bezoek website
          </a>
        )}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <h1 className="text-4xl text-center sm:text-5xl font-bold">Onze partners</h1>
      <p className="mt-4 mx-auto max-w-2xl text-center text-2xl text-neutral-600">
        Dankzij onze partners kunnen we doen wat we doen.
      </p>
      <p className="mt-4 mx-auto max-w-2xl text-center text-2xl text-neutral-600">
        Bedankt voor jullie steun!
      </p>

      <hr className="my-12 border-t-2 border-black" />  


      {/* Hoofdsponsor */}
      <section aria-label="Hoofdsponsor" className="mt-12">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-neutral-500">
          Hoofdsponsor
        </h2>
        <div className="mt-8">
          <HoofdsponsorKaart sponsor={hoofdsponsor} />
        </div>
      </section>


      <hr className="my-12 border-t-2 border-black" />

      {/* Overige partners */}
      <section aria-label="Lijst van partners" className="mt-20">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-neutral-500">
          Partners
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-12">
          {partners.map((partner) => (
            <PartnerKaart key={partner.naam} partner={partner} />
          ))}
        </div>
      </section>
    </main>
  );
}