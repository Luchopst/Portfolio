import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="mb-auto">
        <div>
          <h3 className="Logo">Ponce-Luciano/Dev</h3>
          <nav className="nav-bar ">
            <Link
              to={"inicio"}
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
            >
              Inicio
            </Link>
            <Link
              to={"certificaciones"}
              className="nav-link fw-bold py-1 px-0"
              href="#"
            >
              Certificaciones
            </Link>
            <Link
              to={"contacto"}
              className="nav-link fw-bold py-1 px-0"
              href="#"
            >
              Contacto
            </Link>
            <Link
              to={"acerca de"}
              className="nav-link fw-bold py-1 px-0"
              href="#"
            >
              Acerca de
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
