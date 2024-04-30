import React from "react";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const WhitelistingProject = lazy(() => import("./pages/WhitelistingProject"));
const Certifications = lazy(() => import("./pages/Certifications"));
const CustomOS = lazy(() => import("./pages/Custom_OS"));
const PentestingProject = lazy(() => import("./pages/Pentesting_Project"));
const CertificationsOther = lazy(() => import("./pages/Certifications_other"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <LanguageProvider>
          <Router>
            <ScrollToTop />
            <AppHeader />
            <Suspense fallback={""}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="project/certifications_tryhackme" element={<Certifications />} />
                <Route
                  path="project/certifications_gouvernementales"
                  element={<CertificationsOther />}
                />
                <Route
                  path="project/governmental_certifications"
                  element={<CertificationsOther />}
                />
                <Route path="project/projet_de_pentesting" element={<PentestingProject />} />
                <Route path="/project/whitelisting_project" element={<WhitelistingProject />} />
                <Route path="project/projet_de_whitelisting" element={<WhitelistingProject />} />
                <Route path="project/custom_os" element={<CustomOS />} />
                <Route path="project/systeme_d'exploitation_personnalisé" element={<CustomOS />} />
                <Route path="project/pentesting_project" element={<PentestingProject />} />
                <Route path="project/projet_de_pentesting" element={<PentestingProject />} />
                <Route path="project/portfolio" element={<Portfolio />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
          <UseScrollToTop />
        </LanguageProvider>
      </div>
    </AnimatePresence>
  );
}

export default App;
