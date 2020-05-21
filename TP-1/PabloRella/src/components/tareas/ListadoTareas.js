import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const frases = [
    "Lo que separa a los emprendedores exitosos de los no exitosos es pura perseverancia",
    "Solo los locos que piensan que pueden cambiar el mundo, pueden cambiarlo realmente",
    "La única forma de hacer un gran trabajo, es amar lo que haces",
  ];
  const randomFrase = frases[Math.floor(Math.random() * frases.length)];

  const sombras = ["clase1", "clase2", "clase3"];
  const randomSombras = sombras[Math.floor(Math.random() * sombras.length)];

  const proyectosContext = useContext(proyectoContext);
  const { formulario, proyectos, linkone, linktwo } = proyectosContext;

  return (
    <Fragment>
      {formulario ? (
        <ul className="listado-tareas">
          <li className="tarea">Frase del Dia:</li>
          <li className={`${randomSombras} tarea`}>{randomFrase}</li>
          <li className="tarea">
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/sOnqjkJTMaA"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </li>
        </ul>
      ) : null}
      {linkone ? (
        <ul className="listado-tareas">
          <li className="tarea">Proyectos</li>
          {proyectos.map((item) => (
            <li className="tarea">{item.company}</li>
          ))}
        </ul>
      ) : null}
      {linktwo ? (
        <ul className="listado-tareas">
          <li className="tarea">Proyectos</li>
          {proyectos.domains.map((item) => (
            <li className="tarea">{item.domain}</li>
          ))}
        </ul>
      ) : null}
    </Fragment>
  );
};

export default ListadoTareas;
