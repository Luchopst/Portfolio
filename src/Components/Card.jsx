import React from "react";

function Card() {
  return (
    <div className="Title-cards">
      <h1>Tecnologias</h1>
      <div className="cards-container">
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
    </div>
  );
}

export default Card;
