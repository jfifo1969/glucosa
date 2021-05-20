import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, YAxis } from "recharts";

import "./styles.css";
import Imagen from "../assets/1.png";

const Home = () => {
  const [glucosa, setGlucosa] = useState(0);
  const [data, setData] = useState([{val:100}]);

  useEffect(() => {
    const interval = setInterval(function () {
      const temp = glucosaFunction(80, 275);

      setData(array => [...array,{val:temp}].slice(-10));
      return setGlucosa(temp);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function glucosaFunction(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <>
      <header>
        <ul class="nav-right-section">
          <a href="https://www.niddk.nih.gov/health-information/informacion-de-la-salud/diabetes/informacion-general/control#:~:text=Usted%20puede%20controlar%20su%20diabetes,llamada%20az%C3%BAcar%20en%20la%20sangre.">
            <img src={Imagen} alt="Logo de lucha contra la diabetes" />
          </a>
        </ul>
      </header>
      <section class ="graphic-text" >
        <h3>Tu nivel de glucosa es de: <br/>{glucosa}</h3>
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="val" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
        </LineChart>
      </section>
      <footer>
        <ul class="footer-left">
          <li>
            <a href="mailto:jfifo16@gmail.com?subject=Medidor continuo de glucosa&body=Solicito más información con respecto a esta plataforma.">
              Contacto
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Home;
