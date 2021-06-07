import React, { useState } from 'react';
import Mensaje from './Mensaje';

const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('');

    //state del mensaje de error
    const [mensaje, setMensaje] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //validar 
        if(!termino.trim()){
            setMensaje(true);
            return;
        };

        //eliminar mensaje
        setMensaje(false);

        //enviar termino de busqueda
        setBusqueda(termino);
    }

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o cafe"
                        onChange={e => setTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {
                mensaje && <Mensaje msj="Agrega un termino de busqueda"/>
            }
        </form>
    );
}
 
export default Formulario;