import React from "react";
import PropTypes from "prop-types";
import { useState, createContext, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { singleProjectData as singleProjectDataJsonEN } from "../../data/custom_os/custom_os_en";
import { singleProjectData as singleProjectDataJsonFR } from "../../data/custom_os/custom_os_fr";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const [singleProjectData, setSingleProjectData] = useState(null);

  useEffect(() => {
    if (language === "en") {
      setSingleProjectData(singleProjectDataJsonEN);
    } else if (language === "fr") {
      setSingleProjectData(singleProjectDataJsonFR);
    }
  }, [language]);

  if (!singleProjectData) {
    return null;
  }

  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

SingleProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SingleProjectContext;
