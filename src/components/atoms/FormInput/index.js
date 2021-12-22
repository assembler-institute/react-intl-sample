import React from "react";

const FormInput = ({
  type = "text",
  label,
  name,
  value,
  placeholder,
  handleChange
}) => (
  <div className="mt-2">
    <label className="form-label" htmlFor={name}>
      {label}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  </div>
);

export default FormInput;
