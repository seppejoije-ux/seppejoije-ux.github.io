import type { MetadataRoute } from "next";
import { events, eventSlug } from "./events/eventsData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.szpdroeselare.be";
  const paginas = ["", "/praesidium/", "/events/", "/fotos/", "/partners/"];
  const eventPaginas = events
    .filter((e) => e.info)
    .map((e) => `/events/${eventSlug(e)}/`);

  return [...paginas, ...eventPaginas].map((p) => ({ url: base + p }));
}
