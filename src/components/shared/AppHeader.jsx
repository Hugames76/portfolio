import React from "react";
import { useState, useContext } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import HireMeModal from "../HireMeModal";
import logoLight from "../../images/logo-light.svg";
import logoDark from "../../images/logo-dark.svg";
import { motion } from "framer-motion";
import Button from "../reusable/Button";
import { LanguageContext } from "../../context/LanguageContext";
const englishFlags = require("../../images/en-flags.svg").default;
const frenchFlags = require("../../images/fr-flags.svg").default;
const englishTranslations = require("../../en.json");
const frenchTranslations = require("../../fr.json");

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const { language, switchLanguage } = useContext(LanguageContext);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function showHireMeModal() {
    if (!showModal) {
      document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  function toggleLanguage() {
    if (language === "en") {
      switchLanguage("fr");
    } else {
      switchLanguage("en");
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link to="/">
              {activeTheme === "dark" ? (
                <img src={logoDark} className="w-36" alt="Dark Logo" />
              ) : (
                <img src={logoLight} className="w-36" alt="Dark Logo" />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setTheme(activeTheme);
              }
            }}
            role="button" // Add role attribute to make the element semantically a button
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            tabIndex={0} // Add tabIndex attribute to make the element focusable
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <Link
            to="/projects"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            {language === "en" ? englishTranslations.projects : frenchTranslations.projects}
          </Link>
          <Link
            to="/about"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
          >
            {language === "en" ? englishTranslations.about : frenchTranslations.about}
          </Link>
          <Link
            to="/contact"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="Contact"
          >
            {language === "en" ? englishTranslations.contact : frenchTranslations.contact}
          </Link>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button
              onClick={showHireMeModal}
              onKeyDown={showHireMeModal}
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
              aria-label="Hire Me Button"
              tabIndex={0}
            >
              <Button
                title={language === "en" ? englishTranslations.hireMe : frenchTranslations.hireMe}
              />
            </button>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <Link
            to="/projects"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            {language === "en" ? englishTranslations.projects : frenchTranslations.projects}
          </Link>
          <Link
            to="/about"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            {language === "en" ? englishTranslations.about : frenchTranslations.about}
          </Link>
          <Link
            to="/contact"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Contact"
          >
            {language === "en" ? englishTranslations.contact : frenchTranslations.contact}
          </Link>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex mr-4">
            <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
              <button
                onClick={showHireMeModal}
                onKeyDown={showHireMeModal}
                className="font-general-medium block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
                aria-label="Hire Me Button"
                tabIndex={0}
              >
                <Button
                  title={language === "en" ? englishTranslations.hireMe : frenchTranslations.hireMe}
                />
              </button>
            </div>
          </div>
          <div
            onClick={toggleLanguage}
            onKeyDown={toggleLanguage}
            role="button"
            tabIndex={0}
            aria-label="Language Switcher"
            className="flex items-center p-1 shadow-sm rounded-full cursor-pointer ml-1"
          >
            <img
              src={language === "en" ? frenchFlags : englishFlags}
              alt="Language Flag"
              style={{ width: "4rem", height: "4rem", borderRadius: "25%" }}
            />
          </div>
          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setTheme(activeTheme);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>
      </div>
      {/* Hire me modal */}
      <div>
        {showModal ? <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} /> : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  );
};

export default AppHeader;
