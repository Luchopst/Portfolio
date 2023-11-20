// Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <header className="mb-auto">
        <div className="nav-container">
          <h3 className="Logo" onClick={toggleMenu}>
            Ponce-Luciano/Dev
          </h3>
          <button className="hamburger-menu" onClick={toggleMenu}>
            &#9776;
          </button>
          <nav className={`nav-bar ${menuVisible ? "visible" : ""}`}>
            <Link to={"inicio"} className="nav-link" id="link">
              Inicio
            </Link>
            <Link to={"certificaciones"} className="nav-link" id="link">
              Certificaciones
            </Link>
            <Link to={"contacto"} className="nav-link" id="link">
              Contacto
            </Link>
            <Link to={"acerca de"} className="nav-link" id="link">
              Acerca de
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
