import { useEffect, useState } from "react";
import Formulario from "./components/formulario";
import consultarAPI from "./helpers/consultarAPI";
import ListadoImagenes from "./components/ListadoImagenes"
import CalcularTotalPaginas from "./helpers/CalcularTotalPaginas";

function App() {

  //state de la app
  const [busquedad, setBusqueda] = useState('');

  //datos de la consulta
  const [response, setResponse] = useState([]);

  //state del paginador 
  const [paginaActual, setPagActual] = useState(1);
  const [totalPaginas, setTotalPag] = useState(1);

  //use effect cuando la busqueda cambie
  useEffect( () => {

    if(!busquedad) return;

    const imagenesPagina = 30;

    consultarAPI(busquedad, imagenesPagina, paginaActual)
      .then(resolve => {
        setResponse(resolve);
        setTotalPag(CalcularTotalPaginas(resolve, imagenesPagina));
      });

    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({behavior: 'smooth'});

  }, [busquedad, paginaActual]);

  //Definir la pagina Anterior
  const paginaAnterior = () => {
    const nuevaPaginaactual = paginaActual - 1;

    if(nuevaPaginaactual < 1) return;

    setPagActual(nuevaPaginaactual);
  }

  //Definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual > totalPaginas) return;

    setPagActual(nuevaPaginaActual)
  }

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
          response={response}
        />
        
        { 
          paginaActual === 1 
          ? null: 
          <button 
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
          >&laquo; Anterior</button>
        }
        
        {
          paginaActual === totalPaginas 
          ? null :
          <button 
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        }
      </div>
    </div>
  );
}

export default App;
