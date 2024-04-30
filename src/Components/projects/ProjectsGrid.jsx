import React from "react";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import WhitelistingSingleProject from "./Whitelisting_project/WhitelistingProject";
import CertificationsSingleProject from "./Certifications/CertificationsSingleProject";
import Custom_OsSingleProject from "./Custom_Os/Custom_OsSingleProject";
import Pentesting_Project from "./Pentesting_Project/Pentesting_project";
import Certifications_other from "./Certifications_others/Certifications_othersSingleProject";
import Portfolio from "./Portfolio/PortfolioSingleProject";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";
import { LanguageContext } from "../../context/LanguageContext";
import { projectsData } from "../../data/projects";
const englishTranslations = require("../../en.json");
const frenchTranslations = require("../../fr.json");

const ProjectsGrid = () => {
  const { language } = useContext(LanguageContext);
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          {language === "en"
            ? englishTranslations.projectsPortfolio
            : frenchTranslations.projectsPortfolio}
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          {language === "en"
            ? englishTranslations.searchProjects
            : frenchTranslations.searchProjects}
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder={
                language === "en"
                  ? englishTranslations.projectssearch
                  : frenchTranslations.projectssearch
              }
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {selectProject
          ? selectProjectsByCategory.map((project) => {
              let SingleProjectComponent;

              switch (project.category) {
                case "whitelisting":
                  SingleProjectComponent = WhitelistingSingleProject;
                  break;
                case "certifications":
                  SingleProjectComponent = CertificationsSingleProject;
                  break;
                case "custom_os":
                  SingleProjectComponent = Custom_OsSingleProject;
                  break;
                case "pentesting":
                  SingleProjectComponent = Pentesting_Project;
                  break;
                case "certifications2":
                  SingleProjectComponent = Certifications_other;
                  break;
                case "Portfolio":
                  SingleProjectComponent = Portfolio;
                  break;
                default:
                  SingleProjectComponent = Portfolio;
                  break;
              }

              const projectData = projectsData.find((data) => data.title === project.title);

              if (!projectData) {
                return null;
              }

              return (
                <SingleProjectComponent
                  title={
                    language === "en"
                      ? englishTranslations[projectData.title]
                      : frenchTranslations[projectData.title]
                  }
                  category={
                    language === "en"
                      ? englishTranslations[projectData.category]
                      : frenchTranslations[projectData.category]
                  }
                  image={projectData.img}
                  key={projectData.id}
                />
              );
            })
          : searchProject
          ? searchProjectsByTitle.map((project) => {
              const projectData = projectsData.find((data) => data.title === project.title);

              if (!projectData) {
                return null;
              }

              return (
                <WhitelistingSingleProject
                  title={
                    language === "en"
                      ? englishTranslations[projectData.title]
                      : frenchTranslations[projectData.title]
                  }
                  category={
                    language === "en"
                      ? englishTranslations[projectData.category]
                      : frenchTranslations[projectData.category]
                  }
                  image={projectData.img}
                  key={projectData.id}
                />
              );
            })
          : projects.map((project) => {
              const projectData = projectsData.find((data) => data.title === project.title);

              if (!projectData) {
                return null;
              }

              return (
                <WhitelistingSingleProject
                  title={
                    language === "en"
                      ? englishTranslations[projectData.title]
                      : frenchTranslations[projectData.title]
                  }
                  category={
                    language === "en"
                      ? englishTranslations[projectData.category]
                      : frenchTranslations[projectData.category]
                  }
                  image={projectData.img}
                  key={projectData.id}
                />
              );
            })}
      </div>
    </section>
  );
};

export default ProjectsGrid;
