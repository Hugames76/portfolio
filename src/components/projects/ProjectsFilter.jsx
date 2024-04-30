import React from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import englishTranslations from "../../en.json";
import frenchTranslations from "../../fr.json";

const ProjectsFilter = ({ setSelectProject }) => {
  const { language } = useContext(LanguageContext);

  const selectOptions = [
    {
      value: "all",
      label: language === "en" ? englishTranslations.allProjects : frenchTranslations.allProjects,
    },
    {
      value: "Cybersecurity",
      label:
        language === "en" ? englishTranslations.Cybersecurity : frenchTranslations.Cybersecurity,
    },
    {
      value: "Networks",
      label: language === "en" ? englishTranslations.Networks : frenchTranslations.Networks,
    },
    {
      value: "Development",
      label: language === "en" ? englishTranslations.Development : frenchTranslations.Development,
    },
    {
      value: "Blue_Team",
      label: language === "en" ? englishTranslations.Blue_Team : frenchTranslations.Blue_Team,
    },
    {
      value: "Red_Team",
      label: language === "en" ? englishTranslations.Red_Team : frenchTranslations.Red_Team,
    },
  ];

  const handleSelectProject = (value) => {
    if (value === "all") {
      setSelectProject(null); // Pass null to indicate that all projects should be displayed
    } else {
      setSelectProject(value);
    }
  };

  return (
    <select
      onChange={(e) => {
        handleSelectProject(e.target.value);
      }}
      className="font-general-medium 
          px-4
          sm:px-6
          py-2
          border
          dark:border-secondary-dark
          rounded-lg
          text-sm
          sm:text-md
          dark:font-medium
          bg-secondary-light
          dark:bg-ternary-dark
          text-primary-dark
          dark:text-ternary-light
      "
    >
      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;

ProjectsFilter.propTypes = {
  setSelectProject: PropTypes.func.isRequired,
};
