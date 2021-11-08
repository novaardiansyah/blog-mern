import React from "react";
import "./input.scss";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="input-wrapper">
      <label for={name} className="label">
        {label}
      </label>
      <input className="input" name={name} id={name} {...rest} />
    </div>
  );
};

export default Input;
