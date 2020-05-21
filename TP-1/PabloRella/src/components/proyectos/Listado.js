import React from "react";
import Proyecto from "./Proyecto";

const Listado = () => {
  const proyectos = [{ nombre: "Link 1" }, { nombre: "Link 2" }];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default Listado;
