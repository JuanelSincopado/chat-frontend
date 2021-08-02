import listaAmigos from "../../listaAmigos";
import Buscador from "../buscador/Buscador";
import TarjetaAmigo from "./TarjetaAmigo";
import BotonAgregar from "./BotonAgregar";
import "./listaAmigos.css"

const ListaAmigosMobile = ({ abrirAmigos }) => {
  return (
    <div className={abrirAmigos ? "listaAmigosMobile__contenedor" : "d-none"}>
      <p className="listaAmigosMobile__p">Contactos</p>
    
      <Buscador />

      {listaAmigos.length !== 0 ? (
        listaAmigos.map((amigos) => (
          <TarjetaAmigo amigo={amigos} key={amigos.nombre} />
        ))
      ) : (
        <p className="listaAmigos__noAmigos">No tienes contactos de momento</p>
      )}

      <BotonAgregar />
    </div>
  );
};

export default ListaAmigosMobile;
