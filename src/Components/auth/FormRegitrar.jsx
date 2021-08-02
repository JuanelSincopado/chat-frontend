import useAuth from "../../Hooks/auth/useAuth";
import FormGroup from "./FormGroup";

const FormRegistrar = () => {

  const { handleOnChange, submitRegistrar } = useAuth();

  return (
    <form className="auth__form" onSubmit={submitRegistrar}>
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
