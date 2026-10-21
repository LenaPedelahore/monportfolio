// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Adresse définitive du site, à mettre à jour une fois le nom de domaine choisi
// (brief, partie 8.4). Nécessaire pour le plan du site et les adresses
// complètes utilisées dans les balises de partage.
const site = "https://book-lena.pages.dev";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()],
});
