import BtnCerrarSesion from "./BtnCerrarSesion";

const NavbarConfiguracion = ({ abrirConfig }) => {
  return (
    <div className={abrirConfig ? "navbarConfiguracion__contenedor" : "d-none"}>
      <p className="listaAmigosMobile__p">Configuración</p>

      <BtnCerrarSesion />
    </div>
  );
};

export default NavbarConfiguracion;
