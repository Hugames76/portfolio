import React from "react";
import { useContext } from "react";
import SingleProjectContext from "../../../context/Certifications/CertificationsSingleProjectContext";
import { Link } from "react-router-dom";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleProjectData.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <Link to={project.url} target="_blank">
              <img
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                key={project.id}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
