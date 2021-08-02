import { useState, useContext } from "react";
import "./navbar.css";
import NavbarConfiguracion from "./NavbarConfiguracion";
import AuthContext from "../../Context/authContext/AuthContext";
import NavbarBotonMobile from "./NavbarBotonMobile";
import ListaAmigosMobile from "../listaAmigos/ListaAmigosMobile";
import BtnCerrarSesion from "./BtnCerrarSesion";

const Navbar = () => {
  const [abrirConfig, setAbrirConfig] = useState(false);
  const [abrirAmigos, setAbrirAmigos] = useState(false);

  const { usuario, cerrarSesion } = useContext(AuthContext);

  return (
    <div className="navbar__contenedor">
      <p className="navbar__titulo">
        My<span>Chat</span>
        <i aria-hidden className="fas fa-comment-alt"></i>
      </p>

      <div className="navbar__contenedorBotones">
        <NavbarBotonMobile
          tipo="users"
          estado={abrirAmigos}
          funcion={setAbrirAmigos}
          cerrarEstado={setAbrirConfig}
        />
        <NavbarBotonMobile
          tipo="config"
          estado={abrirConfig}
          funcion={setAbrirConfig}
          cerrarEstado={setAbrirAmigos}
        />
      </div>

      <div className="navbar__sesion">
        <p className="navbar__nombreUsuario">{usuario && usuario.nombre}</p>

        <BtnCerrarSesion />
      </div>

      <ListaAmigosMobile abrirAmigos={abrirAmigos} />

      <NavbarConfiguracion abrirConfig={abrirConfig} />
    </div>
  );
};

export default Navbar;
