import FotoSliderPijlen from "@/app/FotoSliderPijlen";

const EVENTS = [
  {
    titel: "Vergadering",
    tekst: "administratief werk",
    fotos: [
      "/FotosEvent/Vergadering1/Foto1.jpeg",
      "/FotosEvent/Vergadering1/Foto5.jpeg",
      "/FotosEvent/Vergadering1/Foto2.jpeg",
      "/FotosEvent/Vergadering1/Foto3.jpeg",
      "/FotosEvent/Vergadering1/Foto4.jpeg",
      
    ],
  },



  // nieuw event? kopieer gewoon een blok hierboven en pas het aan
];

export default function Fotos() {
  return (
    <main className="w-full flex-1 min-h-screen bg-white text-black max-w-7xl mx-auto px-4 sm:px-10 py-8 lg:py-12">
   

      {EVENTS.map((event) => (
        <section key={event.titel} className="mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            {event.titel}
          </h2>
          <p className="text-lg text-center mb-6">{event.tekst}</p>

          <FotoSliderPijlen fotos={event.fotos} />
        </section>
      ))}
    </main>
  );
}