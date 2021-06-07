import axios from 'axios';

const consultarAPI = async termino => {

    const imagenesPagina = 30;

    const url = `https://pixabay.com/api/?key=21610553-9f6f08ebc7ba0f2edf70ed443&q=${termino}&image_type=photo&per_page=${imagenesPagina}`;
    
    const response = await axios.get(url);

    return(response.data.hits);

}
 
export default consultarAPI;