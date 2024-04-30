import SidelImage from "../images/brands/sidel_gray.png";
import MCEAutomationImage from "../images/brands/mce_automation_gray.png";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
const englishTranslations = require("../en.json");
const frenchTranslations = require("../fr.json");

export const ClientsHeading = () => {
  const { language } = useContext(LanguageContext);
  return language === "en"
    ? englishTranslations.aboutMebrandsTrustMe
    : frenchTranslations.aboutMebrandsTrustMe;
};

export const clientsData = [
  {
    id: 1,
    title: "Sidel",
    img: SidelImage,
  },
  {
    id: 2,
    title: "MCE Automation",
    img: MCEAutomationImage,
  },
];
