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
    title: "Governmental Certifications",
    publishDate: "April - June , 2022",
    tags: "Cybersecurity",
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
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "As part of my training, I had the opportunity to participate in various government-certified training programs. These programs covered different areas such as classified information protection, cybersecurity, data protection, and more.",
    Technologies: [
      {
        title: "Certifications",
        techs: ["Classified information protection", "SecNumAcademie", "Vigipirate", "CNIL RGPD"],
      },
    ],
    ProjectDetailsHeading: "Challenges",
    ProjectDetails: [
      {
        id: 1,
        details:
          "One of the certifications I obtained during my training was the DRSD (Direction du Renseignement et de la sécurité de la défense) certification. This certification focused on the protection of classified information in the context of national defense. It covered topics such as information security, confidentiality measures, and the handling of sensitive data.",
      },
      {
        id: 2,
        details:
          "Another certification I completed was the SecNumAcademie certification. This program provided in-depth training in cybersecurity, aiming to develop expertise in securing digital systems and networks. It covered areas such as risk assessment, threat management, incident response, and secure coding practices.",
      },
      {
        id: 3,
        details:
          "I also obtained the Vigipirate certification, which focused on enhancing security measures in the context of terrorism threats. This certification provided knowledge and skills related to risk analysis, crisis management, and the implementation of preventive measures to ensure the safety and security of individuals and organizations.",
      },
      {
        id: 4,
        details:
          "In addition to the above certifications, I also completed training in CNIL GDPR (Commission Nationale de l'Informatique et des Libertés - Règlement Général sur la Protection des Données). This certification focused on data protection and privacy regulations, providing knowledge and skills to ensure compliance with the General Data Protection Regulation (GDPR) established by the European Union.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
  RelatedProject: {
    title: "Others Certifications",
    Projects: [
      {
        id: 1,
        title: "CNIL - MOOC RGPD",
        img: Image4,
        url: "",
      },
      {
        id: 2,
        title: "CNIL - MOOC RGPD",
        img: Image5,
        url: "",
      },
      {
        id: 3,
        title: "CNIL - MOOC RGPD",
        img: Image6,
        url: "",
      },
      {
        id: 4,
        title: "CNIL - MOOC RGPD",
        img: Image7,
        url: "",
      },
      {
        id: 5,
        title: "CNIL - MOOC RGPD",
        img: Image8,
        url: "",
      },
    ],
  },
};
