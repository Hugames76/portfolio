// Import images
import Image1 from "../../images/whitelisting/whitelisting.png";
import Image2 from "../../images/whitelisting/win_xp.png";
import Image3 from "../../images/whitelisting/win_7.png";
import Image4 from "../../images/custom_os.png";
import Image5 from "../../images/pentest.png";
import Image6 from "../../images/developer-dark.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Projet de Whitelisting",
    publishDate: "Mars - Juin 2023",
    tags: "Développement",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Windows XP",
      img: Image2,
    },
    {
      id: 2,
      title: ".Net Framework",
      img: Image1,
    },
    {
      id: 3,
      title: "Windows 7",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "A propos",
    CompanyInfo: [
      {
        id: 1,
        title: "Projet",
        details: "Application de whitelisting",
      },
      {
        id: 2,
        title: "Entreprise",
        details: "Sidel",
      },
      {
        id: 3,
        title: "Site Web",
        details: "https://sidel.com",
      },
    ],
    ObjectivesHeading: "Objectifs",
    ObjectivesDetails:
      "Stage Technique de 3 mois dans le cadre de ma formation d'ingénieur en informatique. Le but était de développer une application de whitelisting pour l'entreprise Sidel. Le projet a été réalisé en C# avec Windows Forms et .Net Framework.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: ["C#", "Figma", "Windows Forms", ".Net Framework"],
      },
    ],
    ProjectDetailsHeading: "Défis",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Dans le cadre de ma  formation d'ingénieur en informatique, j'ai effectué un stage technique de 3 mois dans l'entreprise Sidel. Le but était de développer une application de whitelisting pour nos systèmes d'exploitation Windows XP et Windows 7. Le projet a été réalisé en C# avec Windows Forms et .Net Framework, afin de ne pas dévoiler comment fonctionne l'application, je serais très vague sur les détails.",
      },
      {
        id: 2,
        details:
          "Dans un premier temps, j'ai dû faire des recherches sur le fonctionnement des applications de whitelisting et sur les différentes méthodes de développement. J'ai ensuite réalisé des maquettes sur Figma pour avoir une idée de l'interface graphique de l'application. Une fois les maquettes validées, j'ai commencé à développer l'application sachant que sur Windows XP nous sommes très limité dans nos choix. J'ai donc commencé par développer les fonctionnalités de base afin de vérifié le bon fonctionnement sur les différents système, puis j'ai ajouté des fonctionnalités plus avancées.",
      },
      {
        id: 3,
        details:
          " J'ai ensuite testé l'application sur les systèmes d'exploitation Windows XP et Windows 7 plusieurs fois dans le but de trouver des bugs et de les corriger. Une fois l'application terminée, j'ai dû faire une présentation de mon travail ainsi que rédiger un rapport de stage et une documentation technique.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
  RelatedProject: {
    title: "Projets similaires",
    Projects: [
      {
        id: 1,
        title: "Custom OS",
        img: Image4,
        url: "../../project/systeme_d'exploitation_personnalisé",
      },
      {
        id: 2,
        title: "Pentesting Project",
        img: Image5,
        url: "../../project/projet_de_pentesting",
      },
      {
        id: 3,
        title: "Portfolio",
        img: Image6,
        url: "../../project/portfolio",
      },
    ],
  },
};
