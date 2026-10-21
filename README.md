# Le book de Lena Pedelahore

Portfolio personnel : une page d'accueil, une page par projet ("étude de
cas") et une page CV. Construit avec [Astro](https://astro.build) et
TypeScript, sans framework JavaScript ni bibliothèque de styles.

Le projet a démarré par un cadrage écrit à l'avance (contenu, ton,
structure) puis une maquette détaillée (couleurs, polices, animations)
avant la moindre ligne de code.

Rien n'est en ligne pour l'instant : le site vit en local et sur GitHub, le
temps de finaliser le contenu réel des projets.

## Sommaire

1. [Lancer le site en local](#1-lancer-le-site-en-local)
2. [Ajouter ou modifier un projet](#2-ajouter-ou-modifier-un-projet)
3. [Modifier les textes de l'accueil](#3-modifier-les-textes-de-laccueil)
4. [Modifier la page CV](#4-modifier-la-page-cv)
5. [Changer les couleurs, les polices, les styles](#5-changer-les-couleurs-les-polices-les-styles)
6. [Remplacer la photo, le CV en PDF, l'email](#6-remplacer-la-photo-le-cv-en-pdf-lemail)
7. [Architecture du projet](#7-architecture-du-projet)
8. [Vérifier le site avant de le publier](#8-vérifier-le-site-avant-de-le-publier)
9. [Publier le site en ligne](#9-publier-le-site-en-ligne)
10. [Checklist avant mise en ligne publique](#10-checklist-avant-mise-en-ligne-publique)
11. [Lexique](#lexique)

## 1. Lancer le site en local

Node.js est nécessaire. Depuis la racine du projet :

```bash
npm install   # une seule fois, ou après avoir changé de machine
npm run dev   # lance le site sur http://localhost:4321
```

Le site se recharge automatiquement à chaque modification. `Ctrl + C` pour
arrêter le serveur.

## 2. Ajouter ou modifier un projet

Un projet = un fichier. Aucun autre fichier n'a besoin d'être touché : le
site se met à jour tout seul.

Les projets sont dans [`src/content/projects/`](src/content/projects/), un
fichier Markdown par projet.

**Modifier un projet existant** : ouvrir le fichier correspondant et éditer
le texte entre guillemets.

**Ajouter un projet** :

1. Dupliquer un fichier existant dans `src/content/projects/`.
2. Renommer la copie : le nom du fichier devient l'adresse de la page
   (`mon-projet.md` → `/projets/mon-projet/`). Minuscules, chiffres et
   tirets uniquement, pas d'accent ni d'espace.
3. Remplir les champs (tableau ci-dessous).
4. Passer `status` à `"published"` quand le projet est prêt.

### Champs du fichier (frontmatter, entre les `---`)

| Champ | Exemple | Rôle |
|---|---|---|
| `title` | `"Mon projet"` | Titre affiché partout |
| `category` | `"pro"`, `"ecole"` ou `"perso"` | Filtre et pastille de couleur |
| `summary` | `"Une phrase qui résume le projet."` | Résumé sur la carte |
| `tags` | `["Power BI", "SQL"]` | Étiquettes sur la carte |
| `color` | `"orange"`, `"rose"`, `"violet"`, `"rose-clair"` ou `"jaune"` | Couleur des barres de la carte |
| `context` | `"Cdiscount Advertising"` | Carte "Cadre" |
| `role` | `"Analyste du projet"` | Carte "Mon rôle" |
| `period` | `"Mars à mai 2026"` | Carte "Période" |
| `tools` | `["SQL", "Power BI"]` | Carte "Outils" |
| `probleme` | `"Le problème de départ."` | Colonne 1 |
| `demarche` | liste de lignes | Colonne 2, en liste numérotée |
| `resultat` | `"L'effet obtenu."` | Colonne 3 |
| `appris` | `"Ce que j'ai appris."` | Bloc final |
| `group` | `true` / `false` | Mention "Projet de groupe" |
| `fictional` | `true` / `false` | Mention "Projet fictif" |
| `status` | `"draft"` / `"published"` | Seul `"published"` apparaît sur le site |
| `order` | `1`, `2`, `3`... | Ordre d'affichage |
| `reviewed` | `true` / `false` | **Pour un projet `"pro"` uniquement** : doit être `true` pour apparaître, une fois relu |
| `images` | voir ci-dessous | Captures, facultatif |

Pour les images : les déposer dans [`public/`](public/) (par exemple
`public/projets/mon-image.png`), puis référencer :

```yaml
images:
  - src: "/projets/mon-image.png"
    alt: "Texte alternatif pour les lecteurs d'écran"
```

Jusqu'à deux images par projet (une grande, une petite). Sans image, une
zone "Capture à ajouter" s'affiche à la place.

**Pourquoi le texte n'est pas dans le corps du fichier Markdown** : les
quatre rubriques (problème, démarche, résultat, appris) sont des champs du
frontmatter plutôt que du texte libre en dessous. Ça garantit que chaque
rubrique garde exactement sa mise en forme (trois colonnes de couleurs
différentes, liste numérotée pour la démarche), sans dépendre de comment le
Markdown est écrit.

**Règles automatiques** :

- Un projet `"pro"` n'apparaît jamais tant que `reviewed` n'est pas à
  `true` : sécurité contre une publication prématurée avant relecture.
- Un projet `"pro"` affiche automatiquement "Données anonymisées : captures
  floutées ou remplacées par des données fictives." sous les preuves.
- `fictional: true` et `group: true` affichent leur pastille automatiquement.

## 3. Modifier les textes de l'accueil

Tous les textes indépendants d'un projet précis (titre, mots qui défilent,
bio, compétences, parcours, contact) sont dans
[`src/data/site.ts`](src/data/site.ts), un seul fichier. Exemple, pour
changer les mots qui tournent dans le titre :

```ts
export const hero = {
  words: ["impact", "analyse", "stratégie", "automatisation"],
  // ...
};
```

Le premier mot de la liste reste affiché si les animations sont réduites
(réglage d'accessibilité du système).

## 4. Modifier la page CV

Même principe : tout le contenu de `/cv` vient de
[`src/data/cv.ts`](src/data/cv.ts) (compétences, expériences, formations,
langues). Éditer les textes entre guillemets.

## 5. Changer les couleurs, les polices, les styles

Le design visuel est centralisé dans
[`src/styles/tokens.css`](src/styles/tokens.css). Exemple :

```css
--orange: #F59A55;
```

Cette variable est utilisée partout où le design en a besoin : pas besoin
de chercher une couleur composant par composant.

Le détail de chaque section de page est dans
[`src/components/`](src/components/) (`Hero.astro`, `Profil.astro`,
`Projets.astro`, etc.) : un fichier par section.

## 6. Remplacer la photo, le CV en PDF, l'email

Trois espaces réservés à remplacer :

- **Photo** : remplacer
  [`public/lena-portrait.svg`](public/lena-portrait.svg) par une vraie
  photo, idéalement nommée `lena-portrait.jpg`, puis mettre à jour le champ
  `photo` dans `src/data/site.ts` (`profile`) et `src/data/cv.ts`
  (`cvIdentity`).
- **CV en PDF** : déposer le fichier dans `public/` sous le nom exact
  `cv-lena-pedelahore.pdf`. Les boutons de téléchargement le trouveront
  automatiquement.
- **Email** : remplacer `"[email à ajouter]"` dans `src/data/site.ts`
  (`email`) et `src/data/cv.ts` (`cvIdentity.email`).

## 7. Architecture du projet

**Astro** : génère un site qui n'envoie que du HTML/CSS statique au
navigateur, rapide et gratuit à héberger.

**TypeScript strict** : chaque fichier de données est vérifié avant le
lancement du site. Un champ manquant ou mal typé dans un projet bloque la
compilation avec un message d'erreur clair, plutôt que de publier une page
cassée silencieusement.

**CSS natif, pas de Tailwind/Bootstrap** : le design est assez spécifique
(dégradés, formes, animations précises) pour que des variables CSS
centralisées (partie 5) soient plus simples à maintenir qu'un système
générique.

**Pas de React ni de framework d'interface** : les interactions (mot qui
tourne, filtres, menu mobile, animations au défilement) sont assez simples
pour tenir dans un seul fichier JavaScript natif,
[`src/scripts/site.ts`](src/scripts/site.ts).

**Un fichier Markdown par projet** (content collection Astro) : ajouter un
projet ne demande jamais d'ouvrir un fichier de code, seulement un fichier
de contenu.

### Arborescence

```
book-lena/
├── src/
│   ├── components/         une section de page = un fichier
│   ├── content/projects/   un projet = un fichier Markdown
│   ├── content.config.ts   schéma des champs attendus pour un projet
│   ├── data/
│   │   ├── site.ts         textes globaux
│   │   └── cv.ts           données du CV
│   ├── layouts/Base.astro  squelette commun (SEO, polices)
│   ├── lib/projects.ts     règle de visibilité des projets
│   ├── pages/              une page du site = un fichier
│   ├── scripts/site.ts     animations et interactions
│   └── styles/
│       ├── tokens.css      couleurs, polices, tailles
│       ├── base.css        mise en page générale
│       └── components.css  style détaillé de chaque section
├── public/                 fichiers statiques : photo, CV, favicon
├── scripts/verifier.mjs    garde-fou avant mise en ligne
└── astro.config.mjs        réglages généraux
```

## 8. Vérifier le site avant de le publier

Un script repère tout texte encore entre crochets (`[à compléter]`) dans
les projets publiés et les données globales :

```bash
npm run verifier
```

Vérification des types :

```bash
npm run check
```

Construction de la version finale :

```bash
npm run build
```

## 9. Publier le site en ligne

Hébergement recommandé : **Cloudflare Pages** (gratuit, sans limite de
trafic pour ce type de site, déploiement automatique à chaque envoi sur
GitHub).

1. Pousser le dépôt sur GitHub (`git push`).
2. Créer un compte Cloudflare.
3. Dans Cloudflare Pages, connecter le dépôt GitHub `monportfolio`.
4. Astro est détecté automatiquement (commande : `npm run build`, dossier
   publié : `dist`).
5. Ajouter un nom de domaine personnalisé.

### Lien avec GitHub

```bash
git add -A
git commit -m "Un message qui décrit le changement"
git push
```

## 10. Checklist avant mise en ligne publique

- [ ] Photo en bonne définition (remplace `public/lena-portrait.svg`)
- [ ] CV en PDF (`cv-lena-pedelahore.pdf` dans `public/`)
- [ ] Adresse email à afficher
- [ ] Date et spécialité de la formation au Wagon
- [ ] Texte "À propos" personnalisé (une base existe déjà dans `src/data/site.ts`)
- [ ] Pour chaque projet : contexte, rôle, démarche, résultat, captures anonymisées, autorisation de publication
- [ ] Pour INTERIMATCH et NidBuyer : rôle précis dans le groupe
- [ ] Relecture des deux projets "pro" par le tuteur ou le manager, puis `reviewed: true`
- [ ] Validation des chiffres internes Cdiscount (marqués `[à valider avant publication]` dans `src/data/cv.ts`)
- [ ] Relecture des mentions légales (`src/pages/mentions-legales.astro`)
- [ ] Nom de domaine et hébergeur choisis
- [ ] `npm run verifier` ne signale plus aucun texte entre crochets

## Lexique

- **Frontmatter** : partie d'un fichier Markdown entre deux lignes `---`,
  qui contient des champs structurés plutôt que du texte libre.
- **Composant** : bloc de page réutilisable (ex. une carte de projet).
- **Design system** : ensemble des règles de design (couleurs, polices,
  espacements) rassemblées en un seul endroit.
- **Dépôt (repo)** : l'endroit sur GitHub où le code est sauvegardé et
  versionné.
