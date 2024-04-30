import React from "react";
import ProjectGallery from "../components/projects/Certifications_others/Certifications_othersProjectGallery";
import ProjectHeader from "../components/projects/Certifications_others/Certifications_othersProjectHeader";
import ProjectInfo from "../components/projects/Certifications_others/Certifications_othersProjectInfo";
import ProjectRelatedProjects from "../components/projects/Certifications_others/Certifications_othersProjectRelatedProjects";
import { SingleProjectProvider } from "../context/Certifications_others/Certifications_othersSingleProjectContext";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        <ProjectHeader />
        <ProjectGallery />
        <ProjectInfo />
        <ProjectRelatedProjects />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default Certifications;
