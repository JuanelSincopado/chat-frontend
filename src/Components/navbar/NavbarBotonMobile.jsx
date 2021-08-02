const NavbarBotonMobile = ({ tipo, estado, funcion, cerrarEstado }) => {
  const click = () => {
      funcion(!estado);
      cerrarEstado(false);
  };

  return (
      <button
          className={
              !estado
                  ? "navbar__navbarBoton"
                  : "navbar__navbarBoton navbar__navbarBoton-activo"
          }
          onClick={click}
      >
          {tipo === "users" ? (
              <i aria-hidden className="fas fa-users"></i>
          ) : (
              <i aria-hidden className="fas fa-cog"></i>
          )}
      </button>
  );
};

export default NavbarBotonMobile;
