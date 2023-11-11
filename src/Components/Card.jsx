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
            <img src="src\Img\html-img.jpg" alt="" />
          </div>
        </div>

        <div className="card" id="card-cont">
          <div className="front" id="front-1 front-2 front-3">
            <h1> GitHub</h1>
          </div>
          <div className="back">
            <img src="src\Img\git-img.jpg" alt="" />
          </div>
        </div>

        <div className="card" id="card-cont">
          <div className="front" id="front-1 front-2 front-3">
            <h1>Java</h1>
          </div>
          <div className="back">
            <img src="src\Img\java-img.jpg" alt="" />
          </div>
        </div>

        <div className="card" id="card-cont">
          <div className="front" id="front-1 front-2 front-3">
            <h1>JavaScript</h1>
          </div>
          <div className="back">
            <img src="src\Img\js-img.jpg" alt="" />
          </div>
        </div>

        <div className="card" id="card-cont">
          <div className="front" id="front-1 front-2 front-3">
            <h1>React</h1>
          </div>
          <div className="back">
            <img src="src\Img\react-img.jpg" alt="" />
          </div>
        </div>

        <div className="card" id="card-cont">
          <div className="front" id="front-1 front-2 front-3">
            <h1>CSS</h1>
          </div>
          <div className="back">
            <img src="src\Img\css.jfif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
