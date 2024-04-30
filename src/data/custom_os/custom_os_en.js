// Import images
import Image1 from "../../images/custom_os/hardening.png";
import Image2 from "../../images/custom_os.png";
import Image3 from "../../images/custom_os/optimized.png";
import Image4 from "../../images/certif.png";
import Image5 from "../../images/pentest.png";
import Image6 from "../../images/whitelisintg.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Custom OS",
    publishDate: "September, 2021",
    tags: "Blue Team",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Defense Team",
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
      title: "Defense Process Team",
      img: Image3,
      url: "",
    },
  ],
  ProjectInfo: {
    ClientHeading: "About",
    CompanyInfo: [
      {
        id: 1,
        title: "Project",
        details: "Custom OS",
      },
      {
        id: 2,
        title: "Company",
        details: "Sidel",
      },
      {
        id: 3,
        title: "Website",
        details: "sidel",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "My project is to design a custom operating system for Sidel's industrial machines, based on Windows 10 as the foundation. This tailored operating system aims to meet requirements in terms of performance, security, and centralized management. By utilizing Windows hardening techniques and GPO configuration,",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["Windows 10", "Hardening Windows", "GPO"],
      },
    ],
    ProjectDetailsHeading: "Challenges",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Throughout my career, I had the opportunity to design a custom operating system based on Windows 10 for Sidel's industrial machines. This ambitious project aimed to meet specific requirements in terms of performance and security. By leveraging the robust features of Windows 10 as a solid foundation, I implemented a customized version using Windows hardening techniques and GPO (Group Policy Object) configuration.",
      },
      {
        id: 2,
        details:
          "Development Process: The creation of this custom operating system involved meticulous planning and execution. I began by analyzing the features offered by Windows 10 and tailored them to meet the specific needs of Sidel's industrial machines. This required a deep understanding of the company's requirements and evaluating how existing features could be optimized to achieve the desired objectives.",
      },
      {
        id: 3,
        details:
          "Enhancing Security: Ensuring the security of Sidel's industrial machines was a crucial aspect of this project. I implemented Windows hardening techniques to bolster the system's protection against potential threats. By identifying possible vulnerabilities, I took preventive measures such as disabling non-essential features, configuring firewalls and access controls, and regularly updating security patches.",
      },
      {
        id: 4,
        details:
          "Management with GPO: To enable efficient management of the custom operating system, I utilized GPO (Group Policy Object) configuration to centrally configure and control system settings. This approach ensured optimal consistency in the configuration of industrial machines while providing customized features, restrictions, and permissions tailored to each specific context.",
      },
      {
        id: 5,
        details:
          "Results and Impact: This project is an ongoing endeavor, continually evolving to meet new challenges. I successfully implemented customized features and security parameters for Sidel's industrial machines, resulting in improved system security and management. Through this project, I gained valuable expertise in the field of operating system security and industrial machine management, particularly in the realm of Group Policy Object (GPO) administration.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
  RelatedProject: {
    title: "Related Projects",
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
