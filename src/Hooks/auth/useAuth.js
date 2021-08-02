import { useContext, useState } from "react";
import AuthContext from "../../Context/authContext/AuthContext";

const useAuth = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    password: "",
    passwordRep: "",
  });

  const { error, mensaje, setError, registrarUsuario, iniciarSesion } =
    useContext(AuthContext);

  const handleOnChange = (name, value) => {
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    const { correo, password } = formulario;

    if (correo.trim() === "" || password.trim() === "") {
      setError("Los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    iniciarSesion({ correo, password });
  };

  const submitRegistrar = (e) => {
    e.preventDefault();

    const { nombre, correo, password, passwordRep } = formulario;

    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      password.trim() === "" ||
      passwordRep.trim() === ""
    ) {
      setError("Los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (password !== passwordRep) {
      setError("Las contraseñas no coinciden");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    registrarUsuario({ nombre, correo, password });
  };

  return {
    formulario,
    error,
    mensaje,
    setError,
    registrarUsuario,
    setFormulario,
    handleOnChange,
    submitRegistrar,
    submitLogin,
  };
};

export default useAuth;
