export default function Praesidium() {
  // Gsm: precies 2 per rij. Vanaf sm: vaste breedte per kaart.
  const card = "text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64";
  const img = "w-full aspect-[4/5] object-cover rounded-lg";

  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 py-8 lg:py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 lg:mb-12">Praesidium</h1>

      {/* max-w = 3 kaarten + 2 gaps, zodat er nooit meer dan 3 naast elkaar staan */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mx-auto mb-8 lg:mb-16 max-w-[calc(3*14rem+2*2rem)] lg:max-w-[calc(3*16rem+2*2rem)]">
        <div className={card}>
          <img src="/Yorun.jpg" alt="Yorun A." className={img} />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Praeses</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">PR</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Yorun A.</p>
        </div>

        <div className={card}>
          <img src="/Brice.jpg" alt="Brice M." className={img} />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Vice-Praeses</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">DJ BRISTI</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Brice M.</p>
        </div>

        <div className={card}>
          <img src="/Seppe.jpg" alt="Seppe J." className={img} />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Quaestor</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Web-Master</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Seppe J.</p>
        </div>

        <div className={card}>
          <img src="/Wobbe.jpg" alt="Wobbe B." className={img} />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Secretaris</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Event</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Wobbe B.</p>
        </div>

        <div className={card}>
          <img src="/Lexie.jpg" alt="Lexie D." className={img} />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Socials</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Event</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Lexie D.</p>
        </div>

        
      </div>
    </main>
  );
}