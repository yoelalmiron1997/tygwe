import {
  FORMULARIO_PROYECTO,
  LINKONE,
  LINKTWO,
  OBTENER_PROYECTOS,
  PROYECTO_ERROR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
        linkone: false,
        linktwo: false,
      };
    case LINKONE:
      return {
        ...state,
        formulario: false,
        linkone: true,
        linktwo: false,
        proyectos: action.payload,
      };
    case LINKTWO:
      return {
        ...state,
        formulario: false,
        linkone: false,
        linktwo: true,
        proyectos: action.payload,
      };

    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };

    default:
      return state;
  }
};
