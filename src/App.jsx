import { useEffect, useState } from "react";
import Formulario from "./components/formulario";
import consultarAPI from "./helpers/consultarAPI";
import ListadoImagenes from "./components/ListadoImagenes"

function App() {

  //state de la app
  const [busquedad, setBusqueda] = useState('');

  //datos de la consulta
  const [imagenes, setImagen] = useState([]);

  //use effect cuando la busqueda cambie
  useEffect( () => {

    if(!busquedad) return;

    consultarAPI(busquedad)
      .then(setImagen);

  }, [busquedad]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario 
          setBusqueda={setBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />
      </div>

    </div>
  );
}

export default App;
