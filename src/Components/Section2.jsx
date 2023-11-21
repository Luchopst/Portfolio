import React from "react";
import "../Estilos/Section2.css";

function Section2() {
  return (
    <div className="container-gral">
      <div className="section2-Container">
        <h3 className="section2-h3">Certificaciones</h3>
        <section className="section2">
          <img
            src="https://i.postimg.cc/Px5hxLJ6/cert-1.jpg"
            alt="Certificado"
          />
          <img
            src="https://i.postimg.cc/QtYDWXWj/cert-2.jpg"
            alt="Certificado"
          />
          <img
            src="https://i.postimg.cc/7ZSqQ8jN/cert-3.jpg"
            alt="Certificado"
          />
          <img
            src="https://i.postimg.cc/nLkppKFj/cert-4.png"
            alt="Certificado"
          />
          <img
            src="https://i.postimg.cc/1zPsk7Q1/cert-5.png"
            alt="Certificado"
          />
        </section>
      </div>
      <div className="text-container">
        <p className="section2-text">
          Estos son algunos de los Certificados otorgados en cursos como EGG
          Cooperations (https://egg.live/es-ar/) mediante Argentina Programa 4.0
          del Gobrierno de la Nacion, apps, como Solo Leanr
          (https://www.sololearn.com/), paginas, como Fundacion Carlos Slim
          (https://fundacioncarlosslim.org/), Educacion IT
          (https://www.educacionit.com) , etc Mi objetivo es poner en practica
          todo lo aprendido al dia de la Fecha.
        </p>
      </div>
    </div>
  );
}

export default Section2;
