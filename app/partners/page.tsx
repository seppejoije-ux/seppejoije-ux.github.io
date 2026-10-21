type Partner = {
  naam: string;
  logo?: string; // pad in /public, bv. "/partners/acme.png"
  website?: string; // optioneel: zonder website is het logo niet klikbaar
};

// Voeg hier gewoon partners toe of verwijder ze.
const partners: Partner[] = [
  { naam: "Partner één", logo: "/Decoral.jpg" }, // logo zonder website
  { naam: "Partner twee", logo: "/ClassicDesign.jpg", website: "https://classic-design.be/" }, // logo met website
  // geen logo -> naam als tekst   { naam: "Partner drie", website: "https://www.voorbeeld.com" }, 
  // { naam: "Partner vier" },
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
    <span className="text-center text-2xl font-semibold text-neutral-700">
      {partner.naam}
    </span>
  );

  // 1 per rij op gsm, 2 per rij op laptop. Alles staat mooi gecentreerd in zijn vak.
  const basis =
    "flex w-full sm:w-[calc(50%-1.5rem)] items-center justify-center transition";

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

      <section
        aria-label="Lijst van partners"
        className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-12"
      >
        {partners.map((partner) => (
          <PartnerKaart key={partner.naam} partner={partner} />
        ))}
      </section>
    </main>
  );
}