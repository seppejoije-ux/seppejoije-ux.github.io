export default function Events() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">

      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Aankomende evenementen
      </h1>

      {/* Legende */}
      <div className="flex justify-center gap-6 mb-10 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded text-3xl"></div>
          <span className="text-3xl font-medium">SZPD evenement</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded"></div>
          <span className="text-3xl font-medium">je vindt ons hier</span>

        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">

        {/* Eigen evenement */}
        <div className="flex items-center gap-4 sm:gap-8 border-2 border-blue-700 rounded-lg p-4 sm:p-6">

          <div className="shrink-0 bg-blue-700 text-white text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
            <p className="text-2xl sm:text-4xl font-bold">...</p>
            <p className="text-base sm:text-xl uppercase">...</p>
          </div>

          <div className="min-w-0 flex-1">
            <div className="inline-block bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              SZPD evenement
            </div>

            <h3 className="text-xl sm:text-3xl font-bold">
              To Be Announced
            </h3>

            <p className="text-base sm:text-lg text-gray-600">
              ... · ...
            </p>

            <p className="text-base sm:text-xl mt-2">
              Kennismaking
            </p>
          </div>
        </div>


        {/* Extern evenement */}
        <div className="flex items-center gap-4 sm:gap-8 border-2 border-yellow-400 rounded-lg p-4 sm:p-6 bg-yellow-50">

          <div className="shrink-0 bg-yellow-400 text-black text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
            <p className="text-2xl sm:text-4xl font-bold">22</p>
            <p className="text-base sm:text-xl uppercase">OKT</p>
          </div>

          <div className="min-w-0 flex-1">
            <div className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full mb-2">
              Je vindt ons hier
            </div>

            <h3 className="text-xl sm:text-3xl font-bold">
              LAN PARTY 
            </h3>

            <p className="text-base sm:text-lg text-gray-600">
              18:00 · stuvo Brugge
            </p>

            <p className="text-base sm:text-xl mt-2">
              Georganiseerd door IEEE Brugge. </p>
             <p className="text-base sm:text-xl mt-2">
             Verschillende SZPD-leden zullen aanwezig zijn. </p>
          </div>
        </div>

      </div>

      <h2 className="text-2xl sm:text-4xl font-bold text-center mt-12 lg:mt-20 mb-8 lg:mb-12">
        Afgelopen evenementen
      </h2>

      <div className="flex flex-col gap-4 sm:gap-8 max-w-4xl mx-auto">

        <div className="flex items-center gap-4 sm:gap-8 border-2 border-gray-400 opacity-70 rounded-lg p-4 sm:p-6">

          <div className="shrink-0 bg-gray-500 text-white text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
            <p className="text-2xl sm:text-4xl font-bold">15</p>
            <p className="text-base sm:text-xl uppercase">OKT</p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl sm:text-3xl font-bold">
              Vergadering
            </h3>

            <p className="text-base sm:text-lg text-gray-600">
              20:00 · De Sloeber
            </p>

            <p className="text-base sm:text-xl mt-2">
              Aankomende activiteiten regelen
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}