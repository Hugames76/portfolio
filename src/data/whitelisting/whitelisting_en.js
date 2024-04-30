// Import images
import Image1 from "../../images/whitelisting/whitelisting.png";
import Image2 from "../../images/whitelisting/win_xp.png";
import Image3 from "../../images/whitelisting/win_7.png";
import Image4 from "../../images/custom_os.png";
import Image5 from "../../images/pentest.png";
import Image6 from "../../images/developer-dark.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Whitelisting",
    publishDate: "March - June 2023",
    tags: "Development",
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
    ClientHeading: "About",
    CompanyInfo: [
      {
        id: 1,
        title: "Project",
        details: "Whitelisting application",
      },
      {
        id: 2,
        title: "Company",
        details: "Sidel",
      },
      {
        id: 3,
        title: "Website",
        details: "https://sidel.com",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "3-month technical internship as part of my computer engineering training. The goal was to develop a whitelisting application for the company Sidel. The project was developed in C# with Windows Forms and .Net Framework.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["C#", "Figma", "Windows Forms", ".Net Framework"],
      },
    ],
    ProjectDetailsHeading: "Challenges",
    ProjectDetails: [
      {
        id: 1,
        details:
          "As part of my training as a computer engineer, I did a 3-month technical internship with Sidel. The aim was to develop a whitelisting application for our Windows XP and Windows 7 operating systems. The project was carried out in C# with Windows Forms and .Net Framework, so as not to reveal how the application works, I'd be very vague on the details, but I'll try to explain the main features.",
      },
      {
        id: 2,
        details:
          "First, I had to research how whitelisting applications work and the different development methods. I then made mock-ups on Figma to get an idea of the application's graphical interface. Once the mock-ups had been validated, I started developing the application, knowing that on Windows XP we're very limited in our choices. So I started by developing the basic functionalities to check that it would work properly on the various systems, then added more advanced features.",
      },
      {
        id: 3,
        details:
          "I then tested the application on the Windows XP and Windows 7 operating systems several times to find and correct bugs. Once the application was finished, I had to make a presentation of my work, as well as write an internship report and technical documentation.",
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
        title: "Custom OS",
        img: Image4,
        url: "../../project/custom_os",
      },
      {
        id: 2,
        title: "Pentesting Project",
        img: Image5,
        url: "../../project/pentesting_project",
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
