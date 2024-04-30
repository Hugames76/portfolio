import React from "react";
import ProjectGallery from "../components/projects/Certifications/CertificationsProjectGallery";
import ProjectHeader from "../components/projects/Certifications/CertificationsProjectHeader";
import ProjectInfo from "../components/projects/Certifications/CertificationsProjectInfo";
import ProjectRelatedProjects from "../components/projects/Certifications/CertificationsProjectRelatedProjects";
import { SingleProjectProvider } from "../context/Certifications/CertificationsSingleProjectContext";
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
