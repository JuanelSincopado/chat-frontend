import MensajeAuth from "../Components/auth/MensajeAuth";
import FormRegistrar from "../Components/auth/FormRegitrar";
import Logo from "../Components/auth/Logo";
import useAuth from "../Hooks/auth/useAuth";

const Registrar = () => {
  const { error, mensaje } = useAuth();

  return (
    <div className="auth__relativo">
      <Logo />

      <FormRegistrar />

      {error && <MensajeAuth mensaje={error} />}
      {mensaje && <MensajeAuth mensaje={mensaje} />}
    </div>
  );
};

export default Registrar;
