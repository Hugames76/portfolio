import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
const englishTranslations = require("../../en.json");
const frenchTranslations = require("../../fr.json");

const ContactDetails = () => {
  const { language } = useContext(LanguageContext);

  const contacts = [
    {
      id: 1,
      name:
        language === "en" ? englishTranslations.contactaddress : frenchTranslations.contactaddress,
      icon: <FiMapPin />,
    },
    {
      id: 2,
      name:
        language === "en"
          ? englishTranslations.contactemailAddress
          : frenchTranslations.contactemailAddress,
      icon: <FiMail />,
    },
    {
      id: 3,
      name:
        language === "en"
          ? englishTranslations.contactphoneNumber
          : frenchTranslations.contactphoneNumber,
      icon: <FiPhone />,
    },
  ];

  return (
    <div className="w-full lg:w-1/2">
      <div className="text-left max-w-xl px-6">
        <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          {language === "en"
            ? englishTranslations.contactcontactDetails
            : frenchTranslations.contactcontactDetails}
        </h2>
        <ul className="font-general-regular">
          {contacts.map((contact) => (
            <li className="flex" key={contact.id}>
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">{contact.icon}</i>
              <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
