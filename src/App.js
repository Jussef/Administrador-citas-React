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

  // Funcion que elimina las citas con un filter y regresa los que no son ese mismo id
  const eliminarCitas = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // Mensaje condicional
  const titulo = citas.length > 0 ? "Administra tus citas" : "No hay citas";

  return (
    <Fragment>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCitas={eliminarCitas} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
