import React from "react";
import { useContext } from "react";
import SingleProjectContext from "../../../context/Portfolio/PortfolioSingleProjectContext";
import { Link } from "react-router-dom";

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {singleProjectData.RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {singleProjectData.RelatedProject.Projects.map((project) => {
          return (
            <Link to={project.url} key={project.id}>
              <img
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
