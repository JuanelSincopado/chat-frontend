import { useContext, useState } from "react";
import AuthContext from "../../Context/authContext/AuthContext";
import FormGroup from "./FormGroup";

const FormRegistrar = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    password: "",
    passwordRep: "",
  });

  const handleOnChange = (name, value) => {
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const { setError, registrarUsuario } = useContext(AuthContext);

  const submit = (e) => {
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

  return (
    <form className="auth__form" onSubmit={submit}>
      <h1 className="auth__h1">Crear Cuenta</h1>

      <FormGroup
        type="mail"
        placeholder="Nombre de Usuario"
        name="nombre"
        icono="fas fa-user"
        handleOnChange={handleOnChange}
      />

      <FormGroup
        type="mail"
        placeholder="Correo"
        name="correo"
        icono="fas fa-envelope"
        handleOnChange={handleOnChange}
      />

      <FormGroup
        type="password"
        placeholder="Contraseña"
        name="password"
        icono="fas fa-unlock"
        handleOnChange={handleOnChange}
      />

      <FormGroup
        type="password"
        placeholder="Contraseña"
        name="passwordRep"
        icono="fas fa-unlock"
        handleOnChange={handleOnChange}
      />

      <input type="submit" value="Crear Cuenta" className="auth__submit" />

      <a href="/" className="auth__crearCuenta">
        Ya posee una cuenta? Inicie Sesión
      </a>
    </form>
  );
};

export default FormRegistrar;
