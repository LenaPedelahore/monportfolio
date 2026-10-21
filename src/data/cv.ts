// Toutes les données de la page /cv.
// Les textes entre crochets sont des espaces réservés à remplacer par Lena.
// Le script "npm run verifier" les repère automatiquement.
import type { ColorName } from "./site";

export interface CvSkill {
  name: string;
  color: ColorName;
  tools: string[];
  points: string[];
  level?: string;
}

export interface CvExperience {
  role: string;
  company: string;
  sector: string;
  location: string;
  start: string;
  end: string;
  unconfirmed?: boolean;
  context?: string;
  missions?: string[];
  achievements?: string[];
  tools?: string[];
}

export interface CvFormation {
  degree: string;
  school: string;
  period: string;
  content?: string[];
  note?: string;
}

export const cvIdentity = {
  photo: "/lena-portrait.svg",
  name: "Lena Pedelahore",
  title: "Business Analyst junior en retail media · MBA IA à Epitech",
  location: "Bordeaux et périphérie",
  linkedin: "https://www.linkedin.com/in/lenapedelahore",
  email: "[email à ajouter]",
  availability: "Disponible en octobre 2027",
  intro: [
    "Ancienne Customer Success devenue analyste data, je rends les chiffres fiables et j'aide les équipes à décider.",
    "Je me positionne entre le métier, la donnée et l'IA : je traduis un besoin business en analyse exploitable, puis en recommandation claire.",
  ],
};

export const cvSkills: CvSkill[] = [
  {
    name: "Entrepôts de données",
    color: "orange",
    tools: ["Snowflake", "BigQuery"],
    points: ["Modéliser un entrepôt de données", "Fiabiliser les flux de données"],
  },
  {
    name: "Requêtes et programmation",
    color: "rose",
    tools: ["SQL", "Python"],
    points: ["Écrire des requêtes complexes", "Scripts d'automatisation simples"],
    level: "SQL : bon niveau · Python : bases",
  },
  {
    name: "BI et reporting",
    color: "violet",
    tools: ["Power BI", "Excel"],
    points: ["Construire des tableaux de bord", "Rationaliser des rapports existants"],
  },
  {
    name: "Modélisation de données",
    color: "rose-clair",
    tools: ["Snowflake", "BigQuery", "SQL"],
    points: ["Schémas en étoile", "Relations plusieurs à plusieurs"],
  },
  {
    name: "Retail media et performance",
    color: "jaune",
    tools: ["Power BI", "Snowflake"],
    points: ["Suivi d'indicateurs de performance publicitaire", "Reporting pour les équipes Brands et Sellers"],
  },
  {
    name: "Pilotage de projet",
    color: "orange",
    tools: ["Conduite de projet"],
    points: ["Cadrer un besoin métier", "Suivre une feuille de route"],
  },
  {
    name: "IA et automatisation",
    color: "rose",
    tools: ["IA générative", "Python"],
    points: ["Automatiser des tâches répétitives", "Explorer des cas d'usage IA générative"],
  },
  {
    name: "Relation métier et communication",
    color: "violet",
    tools: ["Customer Success"],
    points: ["Vulgariser des résultats data", "Faire le lien entre métier et technique"],
  },
];

export const cvLearning = [
  "Automatisation Excel",
  "Pratique de Python",
  "Tableau",
  "Zapier",
  "Fivetran",
];

export const cvExperiences: CvExperience[] = [
  {
    role: "Business Analyst",
    company: "Cdiscount Advertising",
    sector: "Retail media",
    location: "Bordeaux",
    start: "sept. 2025",
    end: "sept. 2027",
    context: "Alternance dans le cadre du MBA IA et transformation des organisations à Epitech.",
    missions: ["[à compléter]"],
    achievements: [
      "Regroupement de 56 rapports Power BI en 16 rapports, sur les espaces Brands et Sellers [à valider avant publication]",
      "Répartition 70 % / 30 % entre les deux espaces [à valider avant publication]",
    ],
    tools: ["Power BI", "Snowflake", "SQL"],
  },
  {
    role: "[à compléter]",
    company: "U'Wine",
    sector: "[à compléter]",
    location: "[à compléter]",
    start: "juin 2022",
    end: "nov. 2024",
    missions: ["[à compléter]"],
    achievements: ["[à compléter]"],
    tools: [],
  },
  {
    role: "[à compléter]",
    company: "France Télévisions",
    sector: "[à compléter]",
    location: "[à compléter]",
    start: "fév. 2022",
    end: "avr. 2022",
    unconfirmed: true,
  },
  {
    role: "[à compléter]",
    company: "CGM Vins",
    sector: "[à compléter]",
    location: "[à compléter]",
    start: "sept. 2020",
    end: "fév. 2022",
  },
];

export const cvFormations: CvFormation[] = [
  {
    degree: "MBA IA et transformation des organisations [intitulé officiel à compléter]",
    school: "Epitech Bordeaux",
    period: "2025 à 2027",
    content: ["Mémoire sur l'IA générative", "Projet INTERIMATCH", "Projet NidBuyer"],
  },
  {
    degree: "Data Analytics",
    school: "Le Wagon",
    period: "avril à juin 2025",
    content: ["Projet Roland-Garros [rôle et outils à compléter]"],
  },
  {
    degree: "Management et commerce international",
    school: "EBBS",
    period: "[année de début à compléter] à 2021",
    note: "Diplôme obtenu en 2021.",
  },
];

export const cvCertification = {
  name: "Google Cloud Data Analytics Certificate",
  status: "En cours",
  endDate: "[date de fin à compléter]",
};

export const cvLanguages = [
  { name: "Français", level: "Langue natale" },
  { name: "Anglais", level: "Avancé (TOEIC 965)" },
  { name: "Espagnol", level: "Bases" },
  { name: "Russe", level: "Débutante" },
];

export const cvInterests: string[] = ["[à compléter]"];
export const cvPublications: string[] = ["[à compléter]"];
