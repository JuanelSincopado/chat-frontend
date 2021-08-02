import listaAmigos from "../../listaAmigos";
import Buscador from "../buscador/Buscador";

const ListaAmigosMobile = ({ abrirAmigos }) => {
  return (
    <div className={abrirAmigos ? "listaAmigos__contenedor" : "d-none"}>
      <p className="listaAmigos__p">Contactos</p>
    
      <Buscador />

      {listaAmigos.length !== 0 ? (
        listaAmigos.map((amigos) => (
          // <TarjetaAmigo amigo={amigos} key={amigos.nombre} />
          <p>{amigos.nombre}</p>
        ))
      ) : (
        <p className="listaAmigos__noAmigos">No tienes contactos de momento</p>
      )}

      {/* <BotonAgregar /> */}
    </div>
  );
};

export default ListaAmigosMobile;
