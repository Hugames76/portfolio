import React from "react";
import PropTypes from "prop-types";
import { useState, createContext, useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { aboutMeData as aboutMeDataEN } from "../data/aboutMe/aboutMeData_en";
import { aboutMeData as aboutMeDataFR } from "../data/aboutMe/aboutMeData_fr";
import { ClientsHeading } from "../data/clientsData";
import { clientsData as clientsDataJson } from "../data/clientsData";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const [aboutMe, setAboutMe] = useState(null);

  useEffect(() => {
    if (language === "en") {
      setAboutMe(aboutMeDataEN);
    } else if (language === "fr") {
      setAboutMe(aboutMeDataFR);
    }
  }, [language]);

  const clientsHeading = <ClientsHeading />;

  const [clientsData, setClientsData] = useState(clientsDataJson);

  if (!aboutMe) {
    return null;
  }

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        clientsHeading,
        clientsData,
        setClientsData,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;

AboutMeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
