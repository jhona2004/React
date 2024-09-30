import React, { useState, useEffect } from "react";
import Formulario from "./components/formulario";
import ListaEstudiantes from "./components/listaEstudiantes";

const App = () => {

  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState(JSON.parse(localStorage.getItem("estudiantes")) ?? []);

  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }, [estudiantes]);

  const borrar = (id) => {
    if(confirm("Desea eliminarlo?")){
      const nuevo = estudiantes.filter(est => est.id !== id);
      setEstudiantes(nuevo);
    }
  }
  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario setEstudiante={setEstudiante} estudiante={estudiante} setEstudiantes={setEstudiantes} estudiantes={estudiantes}/>
        <ListaEstudiantes setEstudiante={setEstudiante} borrar={borrar} estudiantes={estudiantes} estudiante={estudiante}/>
      </div>
    </div>
  );
};

export default App;