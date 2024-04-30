import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => {
  return (
    <div className="font-general-regular mb-4">
      <label
        className="block text-lg text-primary-dark dark:text-primary-light mb-1"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

FormInput.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  ariaLabelName: PropTypes.string.isRequired,
};

export default FormInput;
