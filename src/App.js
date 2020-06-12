import React, { Fragment, useState } from "react";
import Formulario from "./Components/Formulario";
import Cita from "./Components/Cita";

function App() {
  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Funcion que tome las citas actuales y agregue las nuevas.
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Extraer o Destructuring

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map((cita) => (
              <Cita
              key={cita.id}
              cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
