import { useContext } from "react";
import MensajeAuth from "../Components/auth/MensajeAuth";
import FormRegistrar from "../Components/auth/FormRegitrar";
import Logo from "../Components/auth/Logo";
import AuthContext from "../Context/authContext/AuthContext";

const Registrar = () => {
  const { error, mensaje } = useContext(AuthContext);

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
