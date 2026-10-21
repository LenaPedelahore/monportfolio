// Fonctions partagées pour lire la liste des projets à afficher sur le site.
// Un projet n'apparaît que s'il est "published" ET, s'il est "pro", relu :
// un projet pro non relu n'est jamais publié.
import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;

export function isVisible(entry: ProjectEntry): boolean {
  const { status, category, reviewed } = entry.data;
  if (status !== "published") return false;
  if (category === "pro" && !reviewed) return false;
  return true;
}

export async function getVisibleProjects(): Promise<ProjectEntry[]> {
  const all = await getCollection("projects", isVisible);
  return all.sort((a, b) => a.data.order - b.data.order);
}
