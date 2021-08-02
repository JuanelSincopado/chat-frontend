import { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import {
  REGISTRAR_USUARIO_EXITOSO,
  REGISTRAR_USUARIO_ERROR,
  CERRAR_SESION,
  LOGIN_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
} from "../../types";

const AuthState = ({ children }) => {
  const initialState = {
    token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
    autenticado: false,
    usuario: null,
    mensaje: null,
    cargando: true,
  };

  const [error, setError] = useState("");

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const history = useHistory();

  const registrarUsuario = async (usuario) => {
    try {
      const resultado = await clienteAxios.post("/usuario", usuario);

      dispatch({
        type: REGISTRAR_USUARIO_EXITOSO,
        payload: resultado.data,
      });

      usuarioAutenticado();
    } catch (error) {
      dispatch({
        type: REGISTRAR_USUARIO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/auth");

      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });

      history.push("/inicio");
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("auth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      usuarioAutenticado();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        error,
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
