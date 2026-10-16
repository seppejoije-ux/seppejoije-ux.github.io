export default function Praesidium() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 lg:mb-12">Praesidium</h1>

      {/* Rij 1: 3 personen */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 mb-8 lg:mb-16">
        <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
          <img src="/Yorun.jpg" alt="Naam 1" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Praeses</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">PR</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Yorun A. </p>
        </div>

        <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
          <img src="/Brice.jpg" alt="Naam 2" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Vice-Praeses</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Brice M.</p>
        </div>

        <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
          <img src="/Seppe.jpg" alt="Naam 3" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Quaestor</p>
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Web-Master</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Seppe J.</p>
        </div>
      </div>





            {/* Rij 1: 3 personen */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 mb-8 lg:mb-16">
        <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
          <img src="/Wobbe.jpg" alt="Naam 1" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Event</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Wobbe B. </p>
        </div>

        <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
          <img src="/Lexie.jpg" alt="Naam 2" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Socials</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Lexie D.</p>
        </div>

        <div className="text-center w-[calc(50%-0.5rem)] sm:w-56 lg:w-64">
          <img src="/Lars.jpg" alt="Naam 3" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <p className="text-lg sm:text-2xl font-bold mt-2 sm:mt-4">Event</p>
          <p className="text-base sm:text-xl font-bold mt-2 sm:mt-4">Lars B.</p>
        </div>
      </div>


    </main>
  );
}