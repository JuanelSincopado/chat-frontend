const TarjetaAmigoBoton = ({ aceptar }) => {
  return (
      <button
          className={
              aceptar
                  ? "tarjetaAmigoBoton tarjetaAmigoBoton-aceptar"
                  : "tarjetaAmigoBoton tarjetaAmigoBoton-rechazar"
          }
      >
          {aceptar ? "Aceptar" : "Rechazar"}
      </button>
  );
};

export default TarjetaAmigoBoton;
