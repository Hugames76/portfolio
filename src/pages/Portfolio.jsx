import React from "react";
import ProjectGallery from "../components/projects/Portfolio/PortfolioProjectGallery";
import ProjectHeader from "../components/projects/Portfolio/PortfolioProjectHeader";
import ProjectInfo from "../components/projects/Portfolio/PortfolioProjectInfo";
import ProjectRelatedProjects from "../components/projects/Portfolio/PortfolioProjectRelatedProjects";
import { SingleProjectProvider } from "../context/Portfolio/PortfolioSingleProjectContext";
import { motion } from "framer-motion";

const Portfolio = () => {
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

export default Portfolio;
