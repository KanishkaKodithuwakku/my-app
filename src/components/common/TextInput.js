import React from "react";

const TextInput = ({ value, type, placeholder, label, handleOnChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        className="form-control"
        type={type}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </>
  );
};
TextInput.defaultProps = {
  value: "",
  placeholder: "Insert Text",
  type: "text",
};

export default TextInput;
