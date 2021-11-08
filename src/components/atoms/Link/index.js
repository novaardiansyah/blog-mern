import React from "react";
import "./link.scss";

const Link = ({ title, onClick }) => {
  return (
    <p className="link" onClick={onClick}>
      <span className="link-item">{title}</span>
    </p>
  );
};

export default Link;
