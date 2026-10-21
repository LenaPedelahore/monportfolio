// Tous les textes et liens globaux du site (hors projets et CV).
// Modifier une valeur ici suffit à la changer partout où elle apparaît.
// Les textes entre crochets, par exemple [email à ajouter], sont des espaces
// réservés : ils restent visibles tant que Lena ne les a pas remplacés.
// Le script "npm run verifier" les détecte avant une mise en ligne.

export type ColorName = "orange" | "rose" | "violet" | "rose-clair" | "jaune";

// Fait le lien entre un nom de couleur simple (utilisé dans les fichiers de
// contenu) et la variable CSS réelle du design system (src/styles/tokens.css).
export const colorTokens: Record<ColorName, string> = {
  orange: "var(--orange)",
  rose: "var(--pink)",
  violet: "var(--violet)",
  "rose-clair": "var(--rose)",
  jaune: "var(--gold)",
};

export const site = {
  name: "Lena Pedelahore",
  shortName: "Lena",
  role: "Business Data Analyst",
  location: "Bordeaux",
  titleTag: "Lena Pedelahore, Business Data Analyst",
  description:
    "Le book de Lena Pedelahore, Business Analyst junior en reconversion data : études de cas, compétences et parcours.",

  // À remplacer par Lena avant la mise en ligne.
  email: "[email à ajouter]",
  linkedin: "https://www.linkedin.com/in/lenapedelahore",
  cvFile: "/cv-lena-pedelahore.pdf",

  nav: [
    { label: "Profil", href: "/#profil" },
    { label: "Projets", href: "/#projets" },
    { label: "Compétences", href: "/#stack" },
    { label: "Parcours", href: "/#parcours" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const hero = {
  pill: "Business Data Analyst · Bordeaux",
  titleStart: "Je transforme la data en",
  // Les mots qui défilent dans le titre. Le premier mot
  // de la liste est celui qui reste affiché si les animations sont réduites.
  words: ["impact", "analyse", "stratégie", "automatisation"],
  subtitle:
    "Business Analyst junior chez Cdiscount et en MBA IA à Epitech. Je rends les chiffres fiables, j'automatise le reporting et j'aide les équipes à décider.",
  ctaPrimary: { label: "Voir mes études de cas", href: "/#projets" },
  ctaSecondary: { label: "Me contacter", href: "/#contact" },
  card: {
    label: "illustration",
    title: "Reporting fiable",
    tags: ["SQL", "Power BI", "Python"],
  },
};

export const marqueeTools = [
  "SQL",
  "Snowflake",
  "BigQuery",
  "Power BI",
  "Python",
  "Excel",
  "Retail media",
  "IA générative",
];

export const profile = {
  photo: "/lena-portrait.svg",
  titleBefore: "Du terrain client ",
  titleHighlight: "à la donnée.",
  paragraphs: [
    "Je m'appelle Lena. J'ai d'abord travaillé en Customer Success, au contact des clients, avant de passer côté données avec Le Wagon puis un MBA IA à Epitech.",
    "Aujourd'hui, j'analyse des données de retail media chez Cdiscount Advertising. Mon atout : je comprends ce que les équipes cherchent vraiment, parce que j'ai été de l'autre côté.",
  ],
  cards: [
    {
      title: "Un reporting fiable",
      text: "Des chiffres sur lesquels on peut compter.",
    },
    {
      title: "Du temps gagné",
      text: "Des automatisations qui libèrent les équipes.",
    },
    {
      title: "Des décisions éclairées",
      text: "Des recommandations claires pour le business.",
    },
  ],
};

export const projectsSection = {
  title: "Des études de cas, pas juste des outils.",
  filters: [
    { value: "tout", label: "Tout" },
    { value: "pro", label: "Pro" },
    { value: "ecole", label: "École" },
    { value: "perso", label: "Perso" },
  ],
};

export interface Skill {
  name: string;
  color: ColorName;
  phrase: string;
  tools: string;
}

export const skills: Skill[] = [
  {
    name: "Analyse",
    color: "orange",
    phrase: "Décrypter des données complexes.",
    tools: "SQL, Snowflake, BigQuery",
  },
  {
    name: "Reporting",
    color: "rose",
    phrase: "Des tableaux de bord fiables et lisibles.",
    tools: "Power BI, Excel",
  },
  {
    name: "Automatisation",
    color: "violet",
    phrase: "Du temps gagné sur le répétitif.",
    tools: "Python",
  },
  {
    name: "Impact",
    color: "jaune",
    phrase: "Des recommandations orientées business.",
    tools: "Customer Success, IA",
  },
];

export interface ParcoursStep {
  label: string;
  title: string;
  text: string;
  current?: boolean;
}

export const parcours: ParcoursStep[] = [
  {
    label: "Avant",
    title: "Customer Success",
    text: "Plusieurs années au contact des clients. J'y ai appris à écouter le besoin.",
  },
  {
    label: "Le déclic",
    title: "Le Wagon",
    text: "La formation qui m'a fait passer côté données. [Date et spécialité à compléter]",
  },
  {
    label: "Je vais plus loin",
    title: "MBA IA · Epitech",
    text: "Transformation des organisations, en alternance, depuis 2025.",
  },
  {
    label: "Aujourd'hui",
    title: "Business Analyst",
    text: "Cdiscount Advertising, en alternance, depuis 2025.",
    current: true,
  },
];

export const enCeMoment = [
  "Certificat Google Cloud Data Analytics",
  "Mémoire sur l'IA générative",
  "Posts LinkedIn data",
];

export const contact = {
  title: "Parlons data.",
  lead: "Une question, une opportunité, un projet : écrivez-moi.",
};

export const footer = {
  text: `© ${new Date().getFullYear()} Lena Pedelahore · Bordeaux`,
  legalLabel: "Mentions légales",
};
