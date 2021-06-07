import Imagen from "./Imagen";


const ListadoImagenes = ({response}) => {

    if (response.length === 0) return null;

    const imagenes = response.hits;

    return ( 
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}
 
export default ListadoImagenes;