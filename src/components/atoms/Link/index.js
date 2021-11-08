import React from "react";
import "./style/link.css";

const Link = ({ title, onClick }) => {
  return (
    <p className="link" onClick={onClick}>
      <span className="link-item">{title}</span>
    </p>
  );
};

export default Link;
