import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    mostrarLinkone,
    mostrarLinktwo,
    mostrarLinkthree,
    obtenerProyectos,
  } = proyectosContext;

  //console.log(formulario);

  return (
    <li>
      {proyecto.nombre === "Link 1" ? (
        <button
          type="button"
          className="btn btn-blank"
          onClick={() => obtenerProyectos("LINKONE")}
        >
          {proyecto.nombre}
        </button>
      ) : null}

      {proyecto.nombre === "Link 2" ? (
        <button
          type="button"
          className="btn btn-blank"
          onClick={() => obtenerProyectos("LINKTWO")}
        >
          {proyecto.nombre}
        </button>
      ) : null}
      {proyecto.nombre === "Link 3" ? (
        <button
          type="button"
          className="btn btn-blank"
          onClick={() => obtenerProyectos("LINKTHREE")}
        >
          {proyecto.nombre}
        </button>
      ) : null}
    </li>
  );
};

export default Proyecto;
