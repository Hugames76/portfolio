import React from "react";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
const englishTranslations = require("../../en.json");
const frenchTranslations = require("../../fr.json");

const ContactForm = () => {
  const { language } = useContext(LanguageContext);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            {language === "en" ? englishTranslations.contactTitle : frenchTranslations.contactTitle}
          </p>
          <FormInput
            inputLabel={
              language === "en"
                ? englishTranslations.contactfullName
                : frenchTranslations.contactfullName
            }
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText={
              language === "en"
                ? englishTranslations.contactyourName
                : frenchTranslations.contactyourName
            }
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText={
              language === "en"
                ? englishTranslations.contactyourEmail
                : frenchTranslations.contactyourEmail
            }
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel={
              language === "en"
                ? englishTranslations.contactsubject
                : frenchTranslations.contactsubject
            }
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText={
              language === "en"
                ? englishTranslations.contactsubject
                : frenchTranslations.contactsubject
            }
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              {language === "en"
                ? englishTranslations.contactmessage
                : frenchTranslations.contactmessage}
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            {!emailSent ? (
              <Button
                title={
                  language === "en"
                    ? englishTranslations.contactsendMessage
                    : frenchTranslations.contactsendMessage
                }
                type="submit"
                aria-label="Send Message"
                className={emailError ? "bg-red-500 hover:bg-red-600" : ""}
              />
            ) : (
              <span className="text-green-500">&#x2713;</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
