// Import images
import Image2 from "../../images/portfolio/react.png";
import Image3 from "../../images/portfolio/node.png";
import Image4 from "../../images/custom_os.png";
import Image5 from "../../images/pentest.png";
import Image6 from "../../images/whitelisintg.png";
import PortfolioImage from "../../images/developer-dark.svg";

export const singleProjectData = {
  ProjectHeader: {
    title: "Portfolio",
    publishDate: "Juin 2023",
    tags: "Développement",
  },
  ProjectImages: [
    {
      id: 1,
      title: "React",
      img: Image2,
      url: "",
    },
    {
      id: 2,
      title: "Portfolio",
      img: PortfolioImage,
      url: "",
    },
    {
      id: 3,
      title: "Node.js",
      img: Image3,
      url: "",
    },
  ],
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objectifs",
    ObjectivesDetails:
      "Présenter mon travail et mes projets afin de mettre en évidence mes compétences, mon expertise et mes réalisations dans les différents domaines de l'informatique.",
    Technologies: [
      {
        title: "Outils & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      },
    ],
    ProjectDetailsHeading: "Défis",
    ProjectDetails: [
      {
        id: 1,
        details:
          "L'un des principaux défis auxquels j'ai été confronté lors de la création de ce portfolio était l'apprentissage d'un nouveau langage de programmation. Dans le cadre de ce projet, j'ai décidé d'élargir mes compétences en me plongeant dans un nouveau langage et un nouveau framework. J'ai consacré du temps et des efforts pour me familiariser avec les subtilités du langage choisi, en comprenant sa syntaxe et les meilleures pratiques. Cela a été une énorme consécration de temps, mais elle m'a permis d'élargir mes horizons et d'aborder le développement web sous un nouvel angle.",
      },
      {
        id: 2,
        details:
          "En plus d'apprendre un nouveau langage de programmation, j'ai été confronté au défi de concevoir une interface visuellement attrayante et conviviale. J'ai cherché à créer une expérience intuitive et engageante pour les visiteurs, en veillant à ce que le portfolio mette en valeur mon travail et mes compétences de manière efficace. Cela impliquait de prendre soin de la mise en page, du choix des couleurs, de la typographie et de l'esthétique globale. J'ai relevé le défi en mettant à profit ma créativité pour concevoir un portfolio attrayant et professionnel qui reflète mon style personnel et mon expertise.",
      },
      {
        id: 3,
        details:
          "Un autre défi majeur était d'organiser et de présenter mes projets de manière cohérente et structurée. Mon objectif était de fournir une vue d'ensemble claire de mon travail, en mettant en évidence les technologies utilisées et les résultats obtenus. J'ai soigneusement sélectionné les projets les plus impactants et j'ai présenté l'étendue de mes compétences. Équilibrer le niveau de détail et la concision a été un défi, mais j'ai cherché à trouver le bon équilibre pour communiquer efficacement la valeur de chaque projet.",
      },
      {
        id: 4,
        details:
          "Enfin, j'ai été confronté au défi d'optimiser le portfolio pour des performances et une adaptabilité optimales sur différents appareils et tailles d'écran. J'ai mis en œuvre des principes et des techniques de design adaptatif pour m'assurer que le portfolio est accessible et visuellement attrayant sur les ordinateurs de bureau, les tablettes et les appareils mobiles. En utilisant les meilleures pratiques de l'industrie, j'ai cherché à créer une expérience de navigation fluide pour les utilisateurs, quel que soit l'appareil utilisé pour accéder au portfolio.",
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
        title: "projet de whitelisting",
        img: Image6,
        url: "../../project/projet_de_whitelisting",
      },
    ],
  },
};
