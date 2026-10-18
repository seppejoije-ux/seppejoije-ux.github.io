export default function Events() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 lg:mb-12">Aankomende evenementen</h1>

      <div className="flex flex-col gap-4 sm:gap-8 max-w-4xl mx-auto">
        {/* Aankomend 1 */}
        <div className="flex items-center gap-4 sm:gap-8 border-2 border-blue-700 rounded-lg p-4 sm:p-6">
          <div className="shrink-0 bg-blue-700 text-white text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
            <p className="text-2xl sm:text-4xl font-bold">...</p>
            <p className="text-base sm:text-xl uppercase">...</p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl sm:text-3xl font-bold break-words">To Be Announced</h3>
            <p className="text-base sm:text-lg text-gray-600">... · ...</p>
            <p className="text-base sm:text-xl mt-1 sm:mt-2">kennismaking</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold text-center mt-12 lg:mt-20 mb-8 lg:mb-12">Afgelopen evenementen</h2>

      <div className="flex flex-col gap-4 sm:gap-8 max-w-4xl mx-auto">
        {/* Afgelopen 1 (meest recent) */}
        <div className="flex items-center gap-4 sm:gap-8 border-2 border-gray-400 opacity-70 rounded-lg p-4 sm:p-6">
          <div className="shrink-0 bg-gray-500 text-white text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
            <p className="text-2xl sm:text-4xl font-bold">15</p>
            <p className="text-base sm:text-xl uppercase">Okt</p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl sm:text-3xl font-bold break-words">Vergadering</h3>
            <p className="text-base sm:text-lg text-gray-600">20:00 · De Sloeber</p>
            <p className="text-base sm:text-xl mt-1 sm:mt-2">aankomende activiteiten regelen</p>
          </div>
        </div>


    
        {/* Afgelopen 2 (oudste, onderaan) */}
            {/*
        <div className="flex items-center gap-4 sm:gap-8 border-2 border-gray-400 opacity-70 rounded-lg p-4 sm:p-6">
          <div className="shrink-0 bg-gray-500 text-white text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
            <p className="text-2xl sm:text-4xl font-bold">5</p>
            <p className="text-base sm:text-xl uppercase">Sep</p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl sm:text-3xl font-bold break-words">Afgelopen event B</h3>
            <p className="text-base sm:text-lg text-gray-600">22:00 · Locatie</p>
            <p className="text-base sm:text-xl mt-1 sm:mt-2">Korte omschrijving van het event.</p>
          </div>
        </div>
              */}

    
      </div>
    </main>
  );
}