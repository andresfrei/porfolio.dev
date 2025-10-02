import type { APIRoute } from "astro";

const SITE_URL = "https://andresfrei.dev";
const LANGUAGES = ["es", "en", "pt"];

// Páginas del sitio (sin prefijo de idioma)
const PAGES = [
  "", // home
  // Agrega aquí más páginas cuando las tengas
];

export const GET: APIRoute = () => {
  const urls = LANGUAGES.flatMap((lang) =>
    PAGES.map((page) => {
      const path = lang === "es" ? page : `/${lang}${page}`;
      const url = `${SITE_URL}${path}`;
      const alternates = LANGUAGES.filter((l) => l !== lang)
        .map((altLang) => {
          const altPath = altLang === "es" ? page : `/${altLang}${page}`;
          return `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${SITE_URL}${altPath}" />`;
        })
        .join("\n");

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
${alternates}
  </url>`;
    })
  ).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
