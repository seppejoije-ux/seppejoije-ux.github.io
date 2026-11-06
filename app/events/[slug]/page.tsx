import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { events, eventSlug } from "../eventsData";

// Alleen events met `info` krijgen een eigen pagina
const metInfo = events.filter((e) => e.info);

export const dynamicParams = false;

export function generateStaticParams() {
  return metInfo.map((e) => ({ slug: eventSlug(e) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = metInfo.find((e) => eventSlug(e) === slug);
  return { title: event ? `${event.title} | SZPD Roeselare` : "SZPD Roeselare" };
}

export default async function EventDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = metInfo.find((e) => eventSlug(e) === slug);
  if (!event) notFound();

  const external = event.type === "external";

  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-10 lg:px-40 py-8 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/events"
          className="inline-block text-lg sm:text-xl font-medium text-blue-700 hover:underline mb-8"
        >
          ← Terug naar events
        </Link>

        <div
          className={`flex items-center gap-4 sm:gap-8 border-2 rounded-lg p-4 sm:p-6 mb-8 ${
            external ? "border-yellow-400 bg-yellow-50" : "border-blue-700"
          }`}
        >
          <div
            className={`shrink-0 text-center rounded-lg px-3 py-2 sm:px-6 sm:py-4 ${
              external ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"
            }`}
          >
            <p className="text-2xl sm:text-4xl font-bold">{event.day}</p>
            <p className="text-base sm:text-xl uppercase">{event.month}</p>
          </div>

          <div className="min-w-0">
            <div
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
                external ? "bg-yellow-400 text-black" : "bg-blue-700 text-white"
              }`}
            >
              {external ? "Je vindt ons hier" : "SZPD evenement"}
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">{event.title}</h1>
            <p className="text-base sm:text-lg text-gray-600">
              {event.location}
            </p>
          </div>
        </div>

        <div className="text-base sm:text-xl leading-relaxed flex flex-col gap-4">
          {event.info}
        </div>
      </div>
    </main>
  );
}
