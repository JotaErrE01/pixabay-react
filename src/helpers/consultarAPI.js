import axios from 'axios';

const consultarAPI = async (termino, imagenesPagina, paginaActual) => {

    const url = `https://pixabay.com/api/?key=21610553-9f6f08ebc7ba0f2edf70ed443&q=${encodeURI(termino)}&image_type=photo&per_page=${imagenesPagina}&page=${paginaActual}`;
    
    try {
        const response = await axios.get(url);
        return(response.data);
    } catch (error) {
        console.log(error);
    }
    return null;
}
 
export default consultarAPI;