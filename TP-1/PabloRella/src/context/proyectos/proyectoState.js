import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  LINKONE,
  LINKTWO,
  PROYECTO_ERROR,
} from "../../types";
import clienteAxios from "../../config/axios";

const ProyectoState = (props) => {
  const initialState = {
    formulario: true,
    linkone: false,
    linktwo: false,
    proyectos: [],
  };
  //Dispatch para ejecutar las acciones
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones pra el crud de proyectos
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  const mostrarLinkone = () => {
    dispatch({
      type: LINKONE,
    });
  };
  const mostrarLinktwo = () => {
    dispatch({
      type: LINKTWO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = async (quienfue) => {
    try {
      if (quienfue === "LINKONE") {
        var resultado = await clienteAxios.get(
          "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&location=sf"
        );
      }
      if (quienfue === "LINKTWO") {
        var resultado = await clienteAxios.get(
          /*           "https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com" */
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
      }
      dispatch({
        type: quienfue,
        payload: resultado.data,
      });
    } catch (error) {
      const alerta = {
        msg: "Hubo un error",
        categoria: "alerta-error",
      };

      dispatch({
        type: PROYECTO_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        linkone: state.linkone,
        linktwo: state.linktwo,
        mostrarFormulario,
        mostrarLinkone,
        mostrarLinktwo,
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
