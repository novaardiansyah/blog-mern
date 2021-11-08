import React from "react";
import "./style/button.css";

const Button = ({ title, ...rest }) => {
  return (
    <div>
      <button className="button" {...rest}>
        {title}
      </button>
    </div>
  );
};

export default Button;
