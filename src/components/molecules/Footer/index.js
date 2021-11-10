import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-1 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="text-white mb-3 me-2 mb-md-0 text-decoration-none lh-1"
          >
            <span>&copy; 2021 MERN-Blog</span>
          </Link>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link to="/" className="text-white">
              <i className="bi-twitter"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link to="/" className="text-white">
              <i className="bi-instagram"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link to="/" className="text-white">
              <i className="bi-facebook"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link to="/" className="text-white">
              <i className="bi-github"></i>
            </Link>
          </li>
          <li className="ms-3">
            <Link to="/" className="text-white">
              <i className="bi-youtube"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
