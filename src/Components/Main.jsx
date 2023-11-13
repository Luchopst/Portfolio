import React from "react";

function Main() {
  return (
    <main className="px-3">
      <h1> Si lo Sueñas lo Creas...</h1>
      <div className="luciano-container">
        <div className="luciano item1">
          <img src="https://i.postimg.cc/Cxpg8rdn/Lu-2.jpg" alt="" />
        </div>
        <p className="lead item2">
          ¡Hola! Bienvenidos a Mi sitio web... Soy Luciano, y me complace
          recibirlos... En este espacio digital, quiero compartir con ustedes mi
          pasión por el Desarrollo de Paginas Web. Aquí encontrará contenido
          emocionante, información relevante y quizás algunas ideas innovadoras.
        </p>
      </div>
      <div className="btn-conoceme-container">
        <button className="btn-conoceme">Conóceme</button>
      </div>
    </main>
  );
}

export default Main;
