import {
  REGISTRAR_USUARIO_EXITOSO,
  REGISTRAR_USUARIO_ERROR,
  CERRAR_SESION,
  LOGIN_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
} from "../../types";

function AuthReducer(state, action) {
  switch (action.type) {
    case REGISTRAR_USUARIO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        cargando: false,
      };
    case CERRAR_SESION:
    case REGISTRAR_USUARIO_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: false,
        mensaje: action.payload,
        cargando: false,
      };
    default:
      break;
  }
}

export default AuthReducer;
