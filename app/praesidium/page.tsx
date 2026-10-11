type Persoon = {
  foto: string;
  naam: string;
  functies: string[];
};

const rij1: Persoon[] = [
  { foto: "/praesidium1.jpg", naam: "Yorun A.", functies: ["Praeses", "PR"] },
  { foto: "/praesidium2.jpg", naam: "Brice M.", functies: ["Vice-Praeses"] },
  {
    foto: "/praesidium3.jpg",
    naam: "Seppe J.",
    functies: ["Quaestor", "Web-Master"],
  },
];

const rij2: Persoon[] = [
  { foto: "/praesidium4.jpg", naam: "Wobbe B.", functies: ["Event"] },
  { foto: "/praesidium5.jpg", naam: "Lexie D.", functies: ["Socials"] },
];

function Kaart({ persoon }: { persoon: Persoon }) {
  return (
    <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
      <img
        src={persoon.foto}
        alt={persoon.naam}
        className="w-full aspect-[4/5] object-cover rounded-lg"
      />
      {persoon.functies.map((functie) => (
        <p key={functie} className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">
          {functie}
        </p>
      ))}
      <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">
        {persoon.naam}
      </p>
    </div>
  );
}

export default function Praesidium() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 lg:mb-12">
        Praesidium
      </h1>

      {/* Rij 1: 3 personen */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 mb-8 lg:mb-16">
        {rij1.map((p) => (
          <Kaart key={p.foto} persoon={p} />
        ))}
      </div>

      {/* Rij 2: 2 personen */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16">
        {rij2.map((p) => (
          <Kaart key={p.foto} persoon={p} />
        ))}
      </div>
    </main>
  );
}