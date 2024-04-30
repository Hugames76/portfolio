import React from "react";
import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
const englishTranslations = require("../../en.json");
const frenchTranslations = require("../../fr.json");

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 3, duration: 3 });
  useCountUp({ ref: "Certifications", end: 18, duration: 8 });
  useCountUp({ ref: "projectsCounter", end: 10, duration: 5 });
  const { language } = useContext(LanguageContext);
  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title={
            language === "en"
              ? englishTranslations.aboutMeYearsofexperience
              : frenchTranslations.aboutMeYearsofexperience
          }
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title={
            language === "en"
              ? englishTranslations.aboutMepositive
              : frenchTranslations.aboutMepositive
          }
          counter={<span id="Certifications" />}
          measurement=""
        />

        <CounterItem
          title={
            language === "en"
              ? englishTranslations.aboutMeprojects
              : frenchTranslations.aboutMeprojects
          }
          counter={<span id="projectsCounter" />}
          measurement=""
        />
      </div>
    </div>
  );
};

export default AboutCounter;
