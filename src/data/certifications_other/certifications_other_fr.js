// Import images
import Image1 from "../../images/certif_other/attestation_DRSD.jpg";
import Image2 from "../../images/certif_other/attestation_secdunum.jpg";
import Image3 from "../../images/certif_other/attestation_vigipirate.jpg";
import Image4 from "../../images/certif_other/Certificat_1.jpg";
import Image5 from "../../images/certif_other/Certificat_2.jpg";
import Image6 from "../../images/certif_other/Certificat_3.jpg";
import Image7 from "../../images/certif_other/Certificat_4.jpg";
import Image8 from "../../images/certif_other/Certificat_5.jpg";

export const singleProjectData = {
  ProjectHeader: {
    title: "Certifications Gouvernementales",
    publishDate: "Avril - Juin  2022",
    tags: "Cybersécurité",
  },
  ProjectImages: [
    {
      id: 1,
      title: "DRSD",
      img: Image1,
      url: "https://www.drsd.defense.gouv.fr/la-protection-du-secret-de-la-defense-nationale",
    },
    {
      id: 2,
      title: "SecNumAcadémie",
      img: Image2,
      url: "https://secnumacademie.gouv.fr/",
    },
    {
      id: 3,
      title: "Vigipirate",
      img: Image3,
      url: "https://vigipirate.gouv.fr/",
    },
  ],
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objectifs",
    ObjectivesDetails:
      "Dans le cadre de ma formation, j'ai eu l'opportunité de suivre plusieurs formations gouvernementales certifiantes. Dans différents domaines tel que la protection du secret, la cybersécurité, la protection des données, etc.",
    Technologies: [
      {
        title: "Certifications",
        techs: ["La protection du secret", "SecNumAcademie", "Vigipirate", "CNIL RGPD"],
      },
    ],
    ProjectDetailsHeading: "Défis",
    ProjectDetails: [
      {
        id: 1,
        details:
          "L'une des certifications que j'ai obtenues au cours de ma formation est la certification DRSD (Direction du Renseignement et de la Sécurité de la Défense). Cette certification mettait l'accent sur la protection des informations classifiées dans le cadre de la défense nationale. Elle couvrait des sujets tels que la sécurité de l'information, les mesures de confidentialité et la manipulation des données sensibles.",
      },
      {
        id: 2,
        details:
          "Une autre certification que j'ai obtenue est la certification SecNumAcadémie. Ce programme proposait une formation approfondie en cybersécurité dans le but de développer une expertise dans la sécurisation des systèmes et réseaux numériques. Il abordait des domaines tels que l'évaluation des risques, la gestion des menaces, la réponse aux incidents et les bonnes pratiques de programmations sécurisé.",
      },
      {
        id: 3,
        details:
          "J'ai également obtenu la certification Vigipirate, qui mettait l'accent sur le renforcement des mesures de sécurité dans le contexte des menaces terroristes. Cette certification fournissait des connaissances et des compétences liées à l'analyse des risques, à la gestion de crise et à la mise en place de mesures préventives pour assurer la sûreté et la sécurité des individus et des organisations.",
      },
      {
        id: 4,
        details:
          "En plus des certifications mentionnées ci-dessus, j'ai également suivi une formation sur le RGPD CNIL (Règlement Général sur la Protection des Données de la Commission Nationale de l'Informatique et des Libertés). Cette certification mettait l'accent sur la protection des données et les réglementations relatives à la vie privée, fournissant des connaissances et des compétences pour assurer la conformité avec le Règlement Général sur la Protection des Données (RGPD) établi par l'Union européenne.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
  RelatedProject: {
    title: "Autres Certifications",
    Projects: [
      {
        id: 1,
        title: "Attestation 1 de suivi de formation RGPD CNIL",
        img: Image4,
        url: "",
      },
      {
        id: 2,
        title: "Attestation 2 de suivi de formation RGPD CNIL",
        img: Image5,
        url: "",
      },
      {
        id: 3,
        title: "Attestation 3 de suivi de formation RGPD CNIL",
        img: Image6,
        url: "",
      },
      {
        id: 4,
        title: "Attestation 4 de suivi de formation RGPD CNIL",
        img: Image7,
        url: "",
      },
      {
        id: 5,
        title: "Attestation 5 de suivi de formation RGPD CNIL",
        img: Image8,
        url: "",
      },
    ],
  },
};
