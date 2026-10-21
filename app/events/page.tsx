export default function Events() {
  const events = [
    {
      date: "2026-11-01",
      day: "...",
      month: "...",
      title: "To Be Announced",
      location: "... · ...",
      description: "Kennismaking",
      type: "szpd",
    },

    {
      date: "2026-10-22",
      day: "22",
      month: "OKT",
      title: "LAN PARTY",
      location: "18:00 · Stuvo Brugge",
      description:
        "Georganiseerd door IEEE Brugge. Verschillende SZPD-leden zullen aanwezig zijn.",
      type: "external",
    },

    {
      date: "2026-10-15",
      day: "15",
      month: "OKT",
      title: "Vergadering",
      location: "20:00 · De Sloeber",
      description: "Aankomende activiteiten regelen",
      type: "szpd",
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= today
  );

  const pastEvents = events.filter(
    (event) => new Date(event.date) < today
  );

  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Aankomende evenementen
      </h1>

      {/* Legende */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded"></div>
          <span className="text-xl sm:text-2xl font-medium">
            SZPD evenement
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded"></div>
          <span className="text-xl sm:text-2xl font-medium">
            Je vindt ons hier
          </span>
        </div>
      </div>

      {/* Aankomende evenementen */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 sm:gap-8 border-2 rounded-lg p-4 sm:p-6 ${
              event.type === "external"
                ? "border-yellow-400 bg-yellow-50"
                : "border-blue-700"
            }`}
          >
            <div
              className={`shrink-0 text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4 ${
                event.type === "external"
                  ? "bg-yellow-400 text-black"
                  : "bg-blue-700 text-white"
              }`}
            >
              <p className="text-2xl sm:text-4xl font-bold">{event.day}</p>
              <p className="text-base sm:text-xl uppercase">
                {event.month}
              </p>
            </div>

            <div className="min-w-0 flex-1">
              <div
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
                  event.type === "external"
                    ? "bg-yellow-400 text-black"
                    : "bg-blue-700 text-white"
                }`}
              >
                {event.type === "external"
                  ? "Je vindt ons hier"
                  : "SZPD evenement"}
              </div>

              <h3 className="text-xl sm:text-3xl font-bold">
                {event.title}
              </h3>

              <p className="text-base sm:text-lg text-gray-600">
                {event.location}
              </p>

              <p className="text-base sm:text-xl mt-2">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold text-center mt-12 lg:mt-20 mb-8 lg:mb-12">
        Afgelopen evenementen
      </h2>

      {/* Afgelopen evenementen */}
      <div className="flex flex-col gap-4 sm:gap-8 max-w-4xl mx-auto">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className="flex items-center gap-4 sm:gap-8 border-2 border-gray-400 opacity-70 rounded-lg p-4 sm:p-6"
          >
            <div className="shrink-0 bg-gray-500 text-white text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4">
              <p className="text-2xl sm:text-4xl font-bold">
                {event.day}
              </p>
              <p className="text-base sm:text-xl uppercase">
                {event.month}
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-xl sm:text-3xl font-bold">
                {event.title}
              </h3>

              <p className="text-base sm:text-lg text-gray-600">
                {event.location}
              </p>

              <p className="text-base sm:text-xl mt-2">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}