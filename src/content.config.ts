// Schéma des projets. Vérifié automatiquement à chaque lancement du site :
// un champ manquant ou mal écrit dans un fichier projet fait échouer la
// compilation avec un message clair, pour éviter de publier un projet cassé.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    // Titre affiché partout (carte, page, onglet du navigateur)
    title: z.string(),
    // Filtre et pastille : "pro", "ecole" ou "perso"
    category: z.enum(["pro", "ecole", "perso"]),
    // Résumé d'une phrase, affiché sur la carte
    summary: z.string(),
    // Puces d'outils affichées sur la carte
    tags: z.array(z.string()).default([]),
    // Couleur des barres décoratives de la carte, voir src/data/site.ts
    color: z.enum(["orange", "rose", "violet", "rose-clair", "jaune"]),

    // --- Quatre cartes d'information de la fiche projet ---
    context: z.string(),
    role: z.string(),
    period: z.string(),
    tools: z.array(z.string()).default([]),

    // --- Les trois colonnes de la fiche projet ---
    probleme: z.string(),
    demarche: z.array(z.string()).default([]),
    resultat: z.string(),
    appris: z.string(),

    // --- Mentions spéciales ---
    group: z.boolean().default(false),
    fictional: z.boolean().default(false),

    // --- Préparation à la publication ---
    // Seuls les projets "published" apparaissent sur le site.
    status: z.enum(["draft", "published"]).default("draft"),
    // Ordre d'affichage dans la liste et sur l'accueil (du plus petit au plus grand)
    order: z.number().default(99),
    // Un projet "pro" ne doit jamais être publié sans relecture du tuteur ou du manager
    reviewed: z.boolean().default(false),

    // --- Preuves, facultatif ---
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { projects };
