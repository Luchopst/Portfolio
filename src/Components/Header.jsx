import React from "react";

function Header() {
  return (
    <div>
      <header className="mb-auto">
        <div>
          <h3 className="Logo">Ponce-Luciano/Dev</h3>
          <nav className="nav-bar ">
            <a
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
              href="#"
            >
              Inicio
            </a>
            <a className="nav-link fw-bold py-1 px-0" href="#">
              Certificaciones
            </a>
            <a className="nav-link fw-bold py-1 px-0" href="#">
              Contacto
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
