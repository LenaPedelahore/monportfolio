#!/usr/bin/env node
// Garde-fou contre les espaces réservés.
//
// Ce script lit les projets publiés et les fichiers de données globales,
// et signale tout texte encore entre crochets, par exemple [à compléter].
// Il sert à ne jamais mettre en ligne un texte oublié par erreur.
//
// Lancer avec : npm run verifier
//
// Pas de dépendance externe, volontairement : juste du Node natif.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const projectsDir = join(root, "src/content/projects");
const globalFiles = [join(root, "src/data/site.ts"), join(root, "src/data/cv.ts")];

/**
 * Cherche les textes entre crochets dans un bloc de texte brut.
 * Un texte entre crochets qui commence par une guillemet ou une accolade
 * est considéré comme du code (un tableau ou un objet), pas un espace
 * réservé, et n'est donc pas signalé.
 */
function findPlaceholders(text) {
  const matches = [];
  const regex = /\[([^[\]]+)]/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const inner = match[1].trim();
    const looksLikeCode = /^["'{]/.test(inner);
    if (!looksLikeCode) {
      matches.push(match[0]);
    }
  }
  return matches;
}

function getFrontmatterField(raw, key) {
  const stringMatch = raw.match(new RegExp(`^${key}:\\s*"([^"]*)"`, "m"));
  if (stringMatch) return stringMatch[1];
  const boolMatch = raw.match(new RegExp(`^${key}:\\s*(true|false)`, "m"));
  if (boolMatch) return boolMatch[1] === "true";
  return null;
}

let issueCount = 0;
let reviewWarningCount = 0;

console.log("Vérification du book de Lena\n");

// --- 1. Projets publiés ---
const projectFiles = readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

for (const file of projectFiles) {
  const path = join(projectsDir, file);
  const raw = readFileSync(path, "utf-8");

  const status = getFrontmatterField(raw, "status");
  if (status !== "published") continue; // un brouillon peut garder ses crochets

  const title = getFrontmatterField(raw, "title") ?? file;
  const category = getFrontmatterField(raw, "category");
  const reviewed = getFrontmatterField(raw, "reviewed");

  if (category === "pro" && reviewed !== true) {
    reviewWarningCount++;
    console.log(
      `⚠️  "${title}" (${file}) : projet pro marqué "published" mais pas "reviewed". ` +
        `Il ne sera pas affiché sur le site tant qu'il n'est pas relu.\n`,
    );
  }

  const placeholders = findPlaceholders(raw);
  if (placeholders.length > 0) {
    issueCount += placeholders.length;
    console.log(`❌ "${title}" (${file}) : ${placeholders.length} texte(s) entre crochets`);
    for (const p of placeholders) console.log(`   ${p}`);
    console.log("");
  }
}

// --- 2. Données globales (site.ts, cv.ts) ---
for (const path of globalFiles) {
  const raw = readFileSync(path, "utf-8");
  const placeholders = findPlaceholders(raw);
  if (placeholders.length > 0) {
    issueCount += placeholders.length;
    const name = path.split("/").pop();
    console.log(`❌ ${name} : ${placeholders.length} texte(s) entre crochets`);
    for (const p of placeholders) console.log(`   ${p}`);
    console.log("");
  }
}

// --- Résumé ---
if (issueCount === 0 && reviewWarningCount === 0) {
  console.log("✅ Aucun texte entre crochets dans les projets publiés ni dans les données globales.");
  process.exit(0);
} else {
  console.log(
    `Résumé : ${issueCount} texte(s) entre crochets, ${reviewWarningCount} projet(s) pro à relire.`,
  );
  console.log("Remplace ces textes avant de mettre le site en ligne.");
  process.exit(1);
}
