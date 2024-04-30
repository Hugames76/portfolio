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
    publishDate: "June 2023",
    tags: "Development",
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
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "To showcase my work and projects in order to demonstrate my skills, expertise, and achievements in the various fields of information technology",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      },
    ],
    ProjectDetailsHeading: "Challenges",
    ProjectDetails: [
      {
        id: 1,
        details:
          "One of the main challenges I faced while creating this portfolio was learning a new programming language. As part of this project, I decided to expand my skills by diving into a new language and framework. I dedicated time and effort to familiarize myself with the intricacies of the chosen language, understanding its syntax and best practices. It was a significant time commitment, but it allowed me to broaden my horizons and approach web development from a fresh perspective.",
      },
      {
        id: 2,
        details:
          "In addition to learning a new programming language, I encountered the challenge of designing a visually appealing and user-friendly interface. I aimed to create an intuitive and engaging experience for visitors, ensuring that the portfolio effectively showcases my work and skills. This involved careful attention to layout, color choices, typography, and overall aesthetics. I embraced the challenge by leveraging my creativity to design an attractive and professional portfolio that reflects my personal style and expertise.",
      },
      {
        id: 3,
        details:
          "Another significant challenge was organizing and presenting my projects in a coherent and structured manner. My goal was to provide a clear overview of my work, highlighting the technologies used, goals achieved, and results obtained. I carefully selected the most impactful projects and presented the breadth of my skills. Balancing the level of detail and conciseness was a challenge, but I sought to find the right balance to effectively communicate the value of each project.",
      },
      {
        id: 4,
        details:
          "Finally, I faced the challenge of optimizing the portfolio for optimal performance and adaptability across different devices and screen sizes. I implemented principles and techniques of responsive design to ensure the portfolio is accessible and visually appealing on desktop computers, tablets, and mobile devices. By utilizing industry best practices, I aimed to create a seamless browsing experience for users, regardless of the device used to access the portfolio.",
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
        title: "whitelisting project",
        img: Image6,
        url: "../../project/whitelisting_project",
      },
    ],
  },
};
