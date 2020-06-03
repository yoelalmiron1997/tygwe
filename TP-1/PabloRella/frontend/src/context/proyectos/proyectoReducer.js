import {
  FORMULARIO_PROYECTO,
  LINKONE,
  LINKTWO,
  LINKTHREE,
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
        linkthree: false,
      };
    case LINKONE:
      return {
        ...state,
        formulario: false,
        linkone: true,
        linktwo: false,
        linkthree: false,
        proyectos: action.payload,
      };
    case LINKTWO:
      return {
        ...state,
        formulario: false,
        linkone: false,
        linktwo: true,
        linkthree: false,
        proyectos: action.payload,
      };
      case LINKTHREE:
        return {
          ...state,
          formulario: false,
          linkone: false,
          linktwo: false,
          linkthree: true,
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
