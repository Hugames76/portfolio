import React from "react";
import ProjectGallery from "../components/projects/Custom_Os/Custom_OsProjectGallery";
import ProjectHeader from "../components/projects/Custom_Os/Custom_OsProjectHeader";
import ProjectInfo from "../components/projects/Custom_Os/Custom_OsProjectInfo";
import ProjectRelatedProjects from "../components/projects/Custom_Os/Custom_OsProjectRelatedProjects";
import { SingleProjectProvider } from "../context/Custom_Os/Custom_OsSingleProjectContext_en";
import { motion } from "framer-motion";

const Custom_OS = () => {
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

export default Custom_OS;
