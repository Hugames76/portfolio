import React from "react";
import ProjectGallery from "../components/projects/Whitelisting_project/Whitelisting_projectProjectGallery";
import ProjectHeader from "../components/projects/Whitelisting_project/Whitelisting_projectProjectHeader";
import ProjectInfo from "../components/projects/Whitelisting_project/Whitelisting_projectProjectInfo";
import ProjectRelatedProjects from "../components/projects/Whitelisting_project/Whitelisting_projectProjectRelatedProjects";
import { SingleProjectProvider } from "../context/Whitelisting/WhitelistingSingleProjectContext";
import { motion } from "framer-motion";

const WhitelistingProject = () => {
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

export default WhitelistingProject;
