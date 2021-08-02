import useAuth from "../../Hooks/auth/useAuth";
import FormGroup from "./FormGroup";

const Form = () => {
  
  const { handleOnChange, submitLogin } = useAuth();

  return (
    <form className="auth__form" onSubmit={submitLogin}>
      <h1 className="auth__h1">Iniciar Sesión</h1>

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

      <div className="auth__recuperarClave">
        <button>Recuperar Contraseña</button>
      </div>

      <input type="submit" value="Inicar Sesión" className="auth__submit" />

      <a href="/registrar" className="auth__crearCuenta">
        Crear Cuenta
      </a>
    </form>
  );
};

export default Form;
