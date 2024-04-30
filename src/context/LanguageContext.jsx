import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import en from "../en.json";
import fr from "../fr.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
  };

  const getTranslations = () => {
    return language === "en" ? en : fr;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, translations: getTranslations() }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
