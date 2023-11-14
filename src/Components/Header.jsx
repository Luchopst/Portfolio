import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="mb-auto">
        <div className="nav-container">
          <h3 className="Logo">Ponce-Luciano/Dev</h3>
          <nav className="nav-bar ">
            <Link
              to={"inicio"}
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
            >
              Inicio
            </Link>
            <Link to={"certificaciones"} className="nav-link fw-bold py-1 px-0">
              Certificaciones
            </Link>
            <Link to={"contacto"} className="nav-link fw-bold py-1 px-0">
              Contacto
            </Link>
            <Link to={"acerca de"} className="nav-link fw-bold py-1 px-0">
              Acerca de
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
