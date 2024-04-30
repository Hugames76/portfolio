import React from "react";
import { useContext } from "react";
import SingleProjectContext from "../../../context/Certifications_others/Certifications_othersSingleProjectContext";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectRelatedProjects = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {singleProjectData.RelatedProject.title}
      </p>

      <div className="grid grid-cols-5 sm:grid-cols-4 gap-10">
        {singleProjectData.RelatedProject.Projects.map((project) => {
          return (
            <div key={project.id}>
              <ImageGallery
                items={[
                  {
                    original: project.img,
                    thumbnail: project.img,
                  },
                ]}
                showPlayButton={false}
                showFullscreenButton={true}
                useBrowserFullscreen={false}
                showThumbnails={false}
                showBullets={false}
                disableSwipe={true}
                disableArrowKeys={true}
                disableKeyDown={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
