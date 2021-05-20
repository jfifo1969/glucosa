import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from '../assets/2.jpg'

const Login = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  var usuarios = [
    { nombre: "JulianForero", contraseña: "1002397054" },
    { nombre: "DavidArevalo", contraseña: "2165551" },
    { nombre: "JuanaFonseca", contraseña: "3167812961" },
    { nombre: "SantiagoForero", contraseña: "3175027021" },
  ];

  const validacion = () => {
    const resp = usuarios.some((usuario) => {
      return usuario.nombre === username && usuario.contraseña === password;
    });
    if (resp) {
      history.push("/home");
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col ">
          <h3>Bienvenido a su medidor continuo de Glucosa</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="mb-3" id="email">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={(val) => setUsername(val.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              Recuerda nunca compartir tu email ni tu contraseña
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="mb-3" id="contraseña">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              onChange={(val) => setPassword(val.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <button
            type="submit"
            class="btn btn-primary"
            onClick={() => validacion()}
          >
            Enviar
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 image-container">
          <img
            class="main-img"
            src={Logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
