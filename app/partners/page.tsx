type Partner = {
  naam: string;
  logo?: string; // pad in /public, bv. "/partners/acme.png"
  website?: string; // optioneel: zonder website is het logo niet klikbaar
};

// De hoofdsponsor staat bovenaan en wordt groter getoond.
const hoofdsponsor: Partner = {
  naam: "Sponsor 1",
  logo: "/LogosSponsors/Sloeber.webp",
  website: "https://www.zaaldesloeber.be/",
};

// Voeg hier gewoon partners toe of verwijder ze.
const partners: Partner[] = [
  // { naam: "Partner één", logo: "/LogosSponsors/Decoral.jpg" }, // logo zonder website
  { naam: "Partner twee", logo: "/LogosSponsors/ClassicDesign.webp", website: "https://classic-design.be/" },
  { naam: "Partner drie", logo: "/LogosSponsors/Stuvo.webp", website: "https://www.vives.be/nl/studeren/stuvo" },
  // geen logo -> naam als tekst: { naam: "Partner vier", website: "https://www.voorbeeld.com" },
  // { naam: "Partner vijf" },
];

function PartnerKaart({
  partner,
  groot = false,
}: {
  partner: Partner;
  groot?: boolean;
}) {
  const inhoud = partner.logo ? (
    <img
      src={partner.logo}
      alt={partner.naam}
      loading="lazy"
      className={
        groot
          ? "h-56 sm:h-80 w-auto max-w-full object-contain"
          : "h-40 sm:h-52 w-auto max-w-full object-contain"
      }
    />
  ) : (
    <span
      className={`text-center font-semibold text-neutral-700 ${
        groot ? "text-4xl sm:text-5xl" : "text-2xl"
      }`}
    >
      {partner.naam}
    </span>
  );

  // Hoofdsponsor: volle breedte. Anderen: 1 per rij op gsm, 2 per rij op laptop.
  const basis = `flex items-center justify-center transition ${
    groot ? "w-full" : "w-full sm:w-[calc(50%-1.5rem)]"
  }`;

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

      {/* Hoofdsponsor */}
      <section aria-label="Hoofdsponsor" className="mt-12">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-neutral-500">
          Hoofdsponsor
        </h2>
        <div className="mt-8 flex justify-center">
          <PartnerKaart partner={hoofdsponsor} groot />
        </div>
      </section>

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