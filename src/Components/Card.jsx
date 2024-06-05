import React from "react";
import "../Estilos/Card.css";

function Card() {
  return (
    <div className="card-container-gral">
      {/* contenedor de todo el componente */}

      <div className="Title-cards">
        {/* titulo delcomponente cards */}
        <h1>Tecnologias</h1>
      </div>
      <div className="card-gral">
        <div className="cards-container " id="cards-container">
          <div className="card" id="card-cont">
            <div className="front" id="front-1 front-2 front-3">
              <h1>Html</h1>
            </div>
            <div className="back">
              <img src="https://i.postimg.cc/N0pqWgDR/html-img.jpg" alt="" />
            </div>
          </div>

          <div className="card" id="card-cont">
            <div className="front" id="front-1 front-2 front-3">
              <h1> GitHub</h1>
            </div>
            <div className="back">
              <img src="https://i.postimg.cc/XYK0kKyH/git-img.jpg" alt="" />
            </div>
          </div>

          <div className="card" id="card-cont">
            <div className="front" id="front-1 front-2 front-3">
              <h1>Java</h1>
            </div>
            <div className="back">
              <img src="https://i.postimg.cc/C15T0WrX/java-img.jpg" alt="" />
            </div>
          </div>

          <div className="card" id="card-cont">
            <div className="front" id="front-1 front-2 front-3">
              <h1>JavaScript</h1>
            </div>
            <div className="back">
              <img src="https://i.postimg.cc/J4ZhSkkJ/js-img.jpg" alt="" />
            </div>
          </div>

          <div className="card" id="card-cont">
            <div className="front" id="front-1 front-2 front-3">
              <h1>React</h1>
            </div>
            <div className="back">
              <img src="https://i.postimg.cc/MpwGwp7L/react-img.jpg" alt="" />
            </div>
          </div>

          <div className="card" id="card-cont">
            <div className="front" id="front-1 front-2 front-3">
              <h1>CSS</h1>
            </div>
            <div className="back">
              <img src="https://i.postimg.cc/ZKdmCzYh/css-img.jpg" alt="" />
            </div>
          </div>
        </div>
        <p className="text-card">
          Estos son algunas de las tecnologias aprendidas hasta el Momento que
          mas son utillizadas para la Creacion de Paginas Web
        </p>
      </div>
    </div>
  );
}

export default Card;
