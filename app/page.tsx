import FotoSlider from "./FotoSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Stoelen + titel */}
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-10 lg:gap-x-20 px-4 sm:px-10 py-8 lg:py-12">
        {/* Titel: op gsm bovenaan, op desktop in het midden */}
        <div className="order-1 w-full lg:w-auto lg:order-2 text-center max-w-xl mx-auto lg:mx-0 min-w-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 lg:mb-8">
            Stoel Zitten Pils Drinken
          </h1>
          <p className="text-xl sm:text-3xl lg:text-4xl">
            It&apos;s a lifestyle
          </p>
        </div>

        {/* Stoelen: op gsm naast elkaar onder de titel */}
        <div className="order-2 w-full flex justify-center items-center gap-2 sm:gap-6 lg:contents">
          <img
            src="/stoel_links.jpg"
            alt="Stoel links"
            className="lg:order-1 h-32 sm:h-48 lg:h-70 w-auto min-w-0 max-w-[45%] lg:max-w-none object-contain"
          />
          <img
            src="/stoel_rechts.jpg"
            alt="Stoel rechts"
            className="lg:order-3 h-32 sm:h-48 lg:h-70 w-auto min-w-0 max-w-[45%] lg:max-w-none object-contain"
          />
        </div>
      </div>

      {/* Strepen */}
      <div className="w-full">
        <div className="h-3 sm:h-5 w-full bg-blue-700" />
        <div className="h-3 sm:h-5 w-full bg-yellow-300 mb-5" />
      </div>

      {/* Wie zijn wij */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-10 py-8 lg:py-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Wie zijn wij
          </h2>
          <p className="text-base sm:text-2xl mb-4">
            Beste Stoelzitters en Pilsdrinkers.
            <br />
            Wij zijn een startende studentenvereniging uit Roeselare. Ons doel
            is simpel: studenten samenbrengen en zorgen voor onvergetelijke
            momenten naast de lessen. Doorheen het jaar organiseren we leuke
            activiteiten, gezellige avonden en evenementen waar sfeer,
            vriendschap en plezier centraal staan. Of je nu komt voor de
            gezelligheid, een frisse pint of nieuwe vrienden, bij ons is
            iedereen welkom. Samen maken we van het studentenleven iets om nooit
            te vergeten.
          </p>
          <p className="text-base sm:text-xl">SZPD it's a lifestyle</p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/logoSite.jpg"
            alt="Logo SZPD"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto lg:h-100"
          />
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-8 lg:py-12">
        <FotoSlider />
      </section>


    </main>
  );
}