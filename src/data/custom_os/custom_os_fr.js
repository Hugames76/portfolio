// Import images
import Image1 from "../../images/custom_os/hardening.png";
import Image2 from "../../images/custom_os.png";
import Image3 from "../../images/custom_os/optimized.png";
import Image4 from "../../images/certif.png";
import Image5 from "../../images/pentest.png";
import Image6 from "../../images/whitelisintg.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Système d'exploitation personnalisé",
    publishDate: "Septembre, 2021",
    tags: "Blue Team",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Équipe de défense",
      img: Image1,
      url: "",
    },
    {
      id: 2,
      title: "Windows 10",
      img: Image2,
      url: "",
    },
    {
      id: 3,
      title: "Équipe processus de défense",
      img: Image3,
      url: "",
    },
  ],
  ProjectInfo: {
    ClientHeading: "A propos",
    CompanyInfo: [
      {
        id: 1,
        title: "Projet",
        details: "Système d'exploitation personnalisé",
      },
      {
        id: 2,
        title: "Entreprise",
        details: "Sidel",
      },
      {
        id: 3,
        title: "Site Web",
        details: "sidel",
      },
    ],
    ObjectivesHeading: "Objectifs",
    ObjectivesDetails:
      "Mon projet consiste à concevoir un système d'exploitation personnalisé pour les machines industrielles de l'entreprise Sidel, en utilisant Windows 10 comme base. Ce système d'exploitation sur mesure vise à répondre aux besoins spécifiques en termes de performances, de sécurité et de gestion centralisée. En utilisant des techniques de durcissement de Windows et la configuration de GPO.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: ["Windows 10", "Durcissement de Windows", "GPO"],
      },
    ],
    ProjectDetailsHeading: "Défis",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Dans le cadre de mon parcours j'ai eu l'opportunité de concevoir un système d'exploitation personnalisé basé sur Windows 10 pour les machines industrielles de Sidel. Ce projet ambitieux avait pour objectif de répondre aux besoins spécifiques en termes de performances, de sécurité. En exploitant les fonctionnalités de Windows 10 comme base solide, j'ai mis en place une version en utilisant des techniques de durcissement de Windows et la configuration de GPO (stratégies de groupe).",
      },
      {
        id: 2,
        details:
          "Processus de développement : Le processus de création de ce système d'exploitation personnalisé a été minutieusement planifié et exécuté. J'ai commencé par analyser les fonctionnalités offertes par Windows 10 et les ai adaptées pour répondre aux exigences des machines industrielles de Sidel. Cela impliquait de comprendre en profondeur les besoins spécifiques de l'entreprise et d'évaluer comment les fonctionnalités existantes pouvaient être optimisées pour atteindre ces objectifs.",
      },
      {
        id: 3,
        details:
          "Renforcement de la sécurité : Un aspect crucial de ce projet était de garantir la sécurité des machines industrielles de Sidel. J'ai mis en œuvre des techniques de durcissement de Windows, ce qui signifie que j'ai renforcé la protection du système contre les menaces potentielles. J'ai identifié les vulnérabilités possibles et pris des mesures préventives telles que la désactivation des fonctionnalités non essentielles, la configuration de pare-feux et de contrôles d'accès, ainsi que la mise à jour régulière des correctifs de sécurité.",
      },
      {
        id: 4,
        details:
          "Gestion avec les GPO : Pour une gestion efficace du système d'exploitation personnalisé, j'ai utilisé les GPO (stratégies de groupe) afin de configurer et de contrôler les paramètres du système de manière centralisée. Grâce à cette approche, j'ai pu garantir une cohérence optimale dans la configuration des machines industrielles, tout en offrant des fonctionnalités personnalisées, des restrictions et des autorisations spécifiques à chaque contexte.",
      },
      {
        id: 5,
        details:
          "Résultats et impact : Ce projet est toujours en cours et en constante évolution. J'ai pu mettre en œuvre des fonctionnalités personnalisées et des paramètres de sécurité pour les machines industrielles de Sidel, ce qui a permis d'améliorer la sécurité et la gestion des systèmes. J'ai également pu acquérir une expérience précieuse dans le domaine de la sécurité des systèmes d'exploitation et des machines industrielles, ainsi que dans la gestion des stratégies de groupe (GPO). ",
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
        title: "certifications tryhackme",
        img: Image4,
        url: "../../project/certifications_tryhackme",
      },
      {
        id: 2,
        title: "Pentesting Project",
        img: Image5,
        url: "../../project/pentesting_project",
      },
      {
        id: 3,
        title: "whitelisting project",
        img: Image6,
        url: "../../project/whitelisting_project",
      },
    ],
  },
};
