"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { events, eventSlug, type SzpdEvent } from "./eventsData";

// Parse "YYYY-MM-DD" als lokale datum (voorkomt tijdzoneproblemen)
const parseDate = (s: string): Date => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

function EventKaart({ event, past }: { event: SzpdEvent; past?: boolean }) {
  const external = event.type === "external";
  const klikbaar = Boolean(event.info);

  const kaartKleur = past
    ? "border-gray-400 opacity-70"
    : external
      ? "border-yellow-400 bg-yellow-50"
      : "border-blue-700";

  const datumKleur = past
    ? "bg-gray-500 text-white"
    : external
      ? "bg-yellow-400 text-black"
      : "bg-blue-700 text-white";

  const inhoud = (
    <>
      <div
        className={`shrink-0 text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4 ${datumKleur}`}
      >
        <p className="text-2xl sm:text-4xl font-bold">{event.day}</p>
        <p className="text-base sm:text-xl uppercase">{event.month}</p>
      </div>

      <div className="min-w-0 flex-1">
        <div
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
            external ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"
          }`}
        >
          {external ? "Je vindt ons hier" : "SZPD evenement"}
        </div>

        <h3 className="text-xl sm:text-3xl font-bold">{event.title}</h3>

        <p className="text-base sm:text-lg text-gray-600">{event.location}</p>

        <p className="text-base sm:text-xl mt-2">{event.description}</p>

        {klikbaar && (
          <p className="text-base sm:text-lg font-semibold text-blue-700 mt-3">
            Meer info →
          </p>
        )}
      </div>
    </>
  );

  const basis = `flex items-center gap-4 sm:gap-8 border-2 rounded-lg p-4 sm:p-6 ${kaartKleur}`;

  if (klikbaar) {
    return (
      <Link
        href={`/events/${eventSlug(event)}`}
        className={`${basis} cursor-pointer transition hover:shadow-lg hover:scale-[1.01]`}
      >
        {inhoud}
      </Link>
    );
  }

  return <div className={basis}>{inhoud}</div>;
}

export default function Events() {
  // De datum wordt pas in de browser bepaald, zodat de lijst altijd klopt,
  // ook op een statische host zoals GitHub Pages.
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    setToday(t);
  }, []);

  const upcomingEvents = today
    ? events
        .filter((e) => parseDate(e.date) >= today)
        .sort(
          (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
        )
    : [];

  const pastEvents = today
    ? events
        .filter((e) => parseDate(e.date) < today)
        .sort(
          (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
        )
    : [];

  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Aankomende evenementen
      </h1>

      {/* Legende */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-700 rounded shrink-0"></div>
          <span className="text-lg sm:text-2xl font-medium">
            SZPD evenement
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded shrink-0"></div>
          <span className="text-lg sm:text-2xl font-medium">
            Je vindt ons hier
          </span>
        </div>
      </div>

      {/* Aankomende evenementen */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {upcomingEvents.map((event) => (
          <EventKaart key={eventSlug(event)} event={event} />
        ))}
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold text-center mt-12 lg:mt-20 mb-8 lg:mb-12">
        Afgelopen evenementen
      </h2>

      {/* Afgelopen evenementen */}
      <div className="flex flex-col gap-4 sm:gap-8 max-w-4xl mx-auto">
        {pastEvents.map((event) => (
          <EventKaart key={eventSlug(event)} event={event} past />
        ))}
      </div>
    </main>
  );
}
