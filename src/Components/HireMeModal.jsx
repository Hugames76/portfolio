import React from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PropTypes from "prop-types";
const englishTranslations = require("../en.json");
const frenchTranslations = require("../fr.json");

HireMeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const HireMeModal = ({ onClose }) => {
  const { language } = useContext(LanguageContext);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const selectOptions = [
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("static/php/sendEmail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Gérer la réussite de l'envoi de l'e-mail
          console.log("E-mail envoyé avec succès");
          setEmailSent(true);
        } else {
          // Gérer les erreurs lors de l'envoi de l'e-mail
          console.error("Erreur lors de l'envoi de l'e-mail");
          setEmailError(true);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
        setEmailError(true);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                {language === "en"
                  ? englishTranslations.hireWhatproject
                  : frenchTranslations.hireWhatproject}
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form
                onSubmit={handleSubmit}
                className="max-w-xl m-4 text-left"
                action="/static/php/sendEmail.php"
              >
                <div className="">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="name"
                    name="name"
                    type="text"
                    required=""
                    placeholder={
                      language === "en" ? englishTranslations.hirename : frenchTranslations.hirename
                    }
                    aria-label="Name"
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="email"
                    name="email"
                    type="text"
                    required=""
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="subject"
                    name="subject"
                    type="text"
                    required=""
                    aria-label="Project Category"
                  >
                    {selectOptions.map((option) => (
                      <option
                        className="text-normal sm:text-md"
                        value={option.value}
                        key={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Details"
                    placeholder={
                      language === "en"
                        ? englishTranslations.hireprojectdesc
                        : frenchTranslations.hireprojectdesc
                    }
                  ></textarea>
                </div>

                <div className="mt-6 pb-4 sm:pb-1">
                  <span
                    type="submit"
                    className={`px-4
											sm:px-6
											py-2
											text-white
											rounded-md
											focus:ring-1
											duration-500
											${
                        emailSent
                          ? "bg-green-500 hover:bg-green-600"
                          : emailError
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-indigo-500 hover:bg-indigo-600"
                      }`}
                    aria-label="Submit Request"
                  >
                    {!emailSent ? (
                      <Button
                        title={
                          language === "en"
                            ? englishTranslations.hiresend
                            : frenchTranslations.hiresend
                        }
                      />
                    ) : (
                      <span className="text-green-500">&#x2713;</span>
                    )}
                  </span>
                </div>
              </form>
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <span
                onClick={onClose}
                onKeyDown={onClose}
                type="button"
                role="button"
                className="px-4
            									sm:px-6
            									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
            									rounded-md
            									focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
                tabIndex={0}
              >
                <Button
                  title={
                    language === "en" ? englishTranslations.hireclose : frenchTranslations.hireclose
                  }
                />
              </span>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
