import React from "react";

function Register() {
  return (
    <div className="register-container">
      <form className="form-register">
        <p className="title-register">Registro </p>
        <p className="message">Registrate para una Mejor Atencion </p>
        <div className="flex-register">
          <label>
            <input
              required="Ingrese este Campo"
              placeholder=""
              type="text"
              className="input-register"
            />
            <span>Nombre</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className="input-register"
            />
            <span>Apellido</span>
          </label>
        </div>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input-register"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className="input-register"
          />
          <span>Contraseña</span>
        </label>
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className="input-register"
          />
          <span>Confirme su Contraseña</span>
        </label>
        <button className="submit-register">Enviar</button>
        <p className="signin">
          Ya tienes una Cuenta? <a href="#">Ingresar</a>{" "}
        </p>
      </form>
    </div>
  );
}

export default Register;
