import TarjetaAmigoBoton from "./TarjetaAmigoBoton";

const TarjetaAmigo = ({ amigo }) => {
    return (
        <div className="tarjetaAmigo__contenedor">
            <img src={amigo.img} alt={amigo.nombre} />

            <div className="tarjetaAmigo__informacion">
                <p className="tarjetaAmigo__nombre">{amigo.nombre}</p>

                {!amigo.amigo && (
                    <>
                        <TarjetaAmigoBoton aceptar={true} />
                        <TarjetaAmigoBoton aceptar={false} />
                    </>
                )}

                {amigo.amigo && (
                    <p className="tarjetaAmigo__ultimoMensaje">
                        {amigo.lastMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default TarjetaAmigo;