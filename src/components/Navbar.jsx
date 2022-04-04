import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex flex-row">
        <Link
          className="navbar-brand font-weight-bold nav-link text-primary"
          to="/"
        >
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          <span className="text-white"> Home</span>
        </Link>
        <Link
          className="font-weight-normal text-white nav-link"
          to="/formularios"
        >
          Formularios
        </Link>
        <Link
          className="font-weight-normal text-white nav-link"
          to="/historial"
        >
          Historial
        </Link>
        {/* <Link
          className="font-weight-normal text-white nav-link"
          to="/inventario"
        >
          Inventario
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
