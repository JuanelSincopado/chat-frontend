import { useContext } from "react";
import AuthContext from "../../Context/authContext/AuthContext";

const BtnCerrarSesion = () => {
  const { cerrarSesion } = useContext(AuthContext);

  return (
    <button className="BtnCerrarSesion" onClick={cerrarSesion}>
      Cerrar Sesión <i aria-hidden className="fas fa-sign-out-alt"></i>{" "}
    </button>
  );
};

export default BtnCerrarSesion;
