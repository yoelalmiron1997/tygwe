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
        <div class="">
          <h1 class="">Tu primer trabajo</h1>
          <ul className="listado-tareas">
            <li className="tarea">Proyectos disponibles</li>
            {proyectos.map((item) => (
              <li className="tarea">
                Company:{item.company}
                <br></br>
                Time:{item.type}
                <br></br>
                title:{item.title}
                <br></br>
                About for position:{item.url}
                <br></br>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {linktwo ? (
        <ul className="listado-tareas">
          <li className="tarea">Blog de humor: vídeos de humor</li>
          {
            proyectos.response.posts.map((item) => (
              <li className="tarea">
                blog_name:{item.blog_name}
                <br></br>
                state:{item.state}
                <br></br>
                summary:{item.summary}
                <br></br>
                format:{item.format}
                <br></br>
                <iframe
                  width="420"
                  height="315"
                  src={item.video_url}
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </li>
            )) /* console.log(
              proyectos.response.posts
            ) */
          }
        </ul>
      ) : null}
    </Fragment>
  );
};

export default ListadoTareas;
